const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const service=fs.readFileSync('services/contact-form/Code.gs','utf8');
function setup(appValue='general',text='Eine Frage'){
 const events={},fields={};
 const app=fields.app={value:appValue,addEventListener:(n,fn)=>events['app-'+n]=fn};
 const message=fields.message={value:text,addEventListener:(n,fn)=>events['message-'+n]=fn,setCustomValidity(v){this.error=v;}};
 fields.website={value:''};fields.requestId={value:''};
 const button={disabled:true};const status={},hint={};
 const form={querySelector:q=>q==='button[type="submit"]'?button:fields[q.match(/name="([^"]+)"/)[1]],addEventListener:(n,fn)=>events[n]=fn};
 const window={crypto:{randomUUID:()=> '00000000-0000-4000-8000-000000000003'},addEventListener:(n,fn)=>events[n]=fn};
 vm.runInNewContext(fs.readFileSync('assets/contact-form.js','utf8'),{document:{querySelector:q=>({'#contact-form':form,'#contact-form-status':status,'#contact-message-hint':hint})[q]},window,crypto:window.crypto});
 const payload=()=>{const data=new FormData();data.set('app',app.value);data.set('message',message.value);data.set('email','qa@example.invalid');data.set('requestId',fields.requestId.value);events.formdata({formData:data});return data;};
 const validate=data=>{const context={};vm.createContext(context);vm.runInContext(service,context);const p=Object.fromEntries(data);return context.validateContact_({parameter:p,parameters:Object.fromEntries(Object.entries(p).map(([k,v])=>[k,[v]])),contentLength:1000});};
 return {app,message,events,button,payload,validate,form};
}
test('Dokumaro is identified in the message and accepted by the unchanged deployed validation',()=>{
 const x=setup('dokumaro');const data=x.payload();assert.equal(data.has('app'),false);assert.equal(data.get('message'),'App: Dokumaro\n\nEine Frage');assert.equal(x.validate(data).message,data.get('message'));assert.equal(x.message.value,'Eine Frage');
 assert.equal(x.form.action,'https://script.google.com/macros/s/AKfycbzcwVhKNEY3iYJYehuetwCHtBejFpe33ZONP5bqX4pK2rqh1tvcBl5IsrA7Q7Rl6Q3wpA/exec');
});
test('existing general and Mitgemischt payloads remain unchanged',()=>{
 for(const app of ['general','mitgemischt']){const x=setup(app);const data=x.payload();assert.equal(data.get('app'),app);assert.equal(data.get('message'),'Eine Frage');assert.equal(x.message.maxLength,5000);assert.equal(x.validate(data).app,app==='general'?'Allgemein':'Mitgemischt');}
});
test('Dokumaro prefix is included in the server message length limit without truncation',()=>{
 const x=setup('dokumaro');x.message.value='x'.repeat(x.message.maxLength);x.events['message-input']();assert.equal(x.message.error,'');assert.equal(x.payload().get('message').length,5000);assert.doesNotThrow(()=>x.validate(x.payload()));x.message.value+='x';x.events['message-input']();assert.notEqual(x.message.error,'');assert.throws(()=>x.validate(x.payload()));
});
test('switching apps restores limit and never duplicates product prefix on native payload creation',()=>{
 const x=setup('general');x.app.value='dokumaro';x.events['app-change']();const a=x.payload();const b=x.payload();assert.equal(a.get('message'),b.get('message'));assert.equal(x.message.value,'Eine Frage');x.app.value='mitgemischt';x.events['app-change']();assert.equal(x.message.maxLength,5000);assert.equal(x.payload().get('app'),'mitgemischt');
});
test('honeypot still prevents submission',()=>{
 const x=setup('dokumaro');let stopped=false;x.form.querySelector('[name="website"]').value='bot';x.events.submit({preventDefault(){stopped=true;}});assert.equal(stopped,true);
});
