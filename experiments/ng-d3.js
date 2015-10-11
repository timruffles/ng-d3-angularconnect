(function() {

var apps = 0;

d3.selection.prototype.angularise = function(opts) {
   opts = opts || {};

   console.log(this.size());
   
   this.each(function(d, i) {
     var el = this;
     var modules = (opts.modules || []).slice();
     console.log("each", i, d.name);
     

     apps += 1;
     var moduleName = "invocation-" + apps;

     angular.module(moduleName, [])
     .value("$data", d)
     .run(launch)

     modules.push(moduleName);
   
     angular.bootstrap(el, modules);
     console.log("post bootstrap", d.name);
     

     function launch(
       $compile
       , $templateRequest
       , $q
       , $rootScope
       , $data
     ) {
       console.log("launched!");
       getTemplate()
       .then(function(compileTarget) {

         console.log("got tpl", compileTarget, $data);
         
         if(compileTarget === "skip") {
           return;
         }

         var link = $compile(compileTarget);
         link($rootScope, function(compiled) {
           angular.element(el).append(compiled);
         });
       });
       
       function getTemplate() {
         if(opts.template) {
           return $q.when(template)
         } else if (opts.templateUrl) {
           return $templateRequest(opts.templateUrl)
         } else {
           return $q.when("skip");
         }
       }
     }
   })


};
  
})();
