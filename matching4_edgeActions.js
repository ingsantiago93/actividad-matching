/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // Insertar código para ejecutarse cuando el símbolo se crea aquí         
         //ed_send_data(sym);
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Submit}", "click", function(sym, e) {
         EDGE_Recurso_Submit(sym);
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'obj1_txt'
   (function(symbolName) {   
   
   })("obj1_txt");
   //Edge symbol end:'obj1_txt'

   //=========================================================
   
   //Edge symbol: 'obj2_txt'
   (function(symbolName) {   
   
   })("obj2_txt");
   //Edge symbol end:'obj2_txt'

   //=========================================================
   
   //Edge symbol: 'obj3_txt'
   (function(symbolName) {   
   
   })("obj3_txt");
   //Edge symbol end:'obj3_txt'

   //=========================================================
   
   //Edge symbol: 'obj4_txt'
   (function(symbolName) {   
   
   })("obj4_txt");
   //Edge symbol end:'obj4_txt'

   //=========================================================
   
   //Edge symbol: 'obj5_txt'
   (function(symbolName) {   
   
   })("obj5_txt");
   //Edge symbol end:'obj5_txt'

   //=========================================================
   
   //Edge symbol: 'obj1_par'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${par1}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
      });
         //Edge binding end

   })("obj1_par");
   //Edge symbol end:'obj1_par'

   //=========================================================
   
   //Edge symbol: 'obj2_par'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${par2}", "mouseover", function(sym, e) {

      });
         //Edge binding end

   })("obj2_par");
   //Edge symbol end:'obj2_par'

   //=========================================================
   
   //Edge symbol: 'obj3_par'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${par3}", "mouseover", function(sym, e) {

      });
      //Edge binding end

   })("obj3_par");
   //Edge symbol end:'obj3_par'

   //=========================================================
   
   //Edge symbol: 'obj4_par'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${par4}", "mouseover", function(sym, e) {

      });
      //Edge binding end

   })("obj4_par");
   //Edge symbol end:'obj4_par'

   //=========================================================
   
   //Edge symbol: 'obj5_par'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${par5}", "mouseover", function(sym, e) {


      });
      //Edge binding end

   })("obj5_par");
   //Edge symbol end:'obj5_par'

   //=========================================================
   
   //Edge symbol: 'contenedor_padre'
   (function(symbolName) {   
   
   })("contenedor_padre");
   //Edge symbol end:'contenedor_padre'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Submit'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Submit");
   //Edge symbol end:'Submit'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-18191759");