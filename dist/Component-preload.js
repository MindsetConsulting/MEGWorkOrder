//@ui5-bundle meg/workorder/Component-preload.js
sap.ui.require.preload({
	"meg/workorder/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","meg/workorder/model/models"],function(e,t,i){"use strict";return e.extend("meg.workorder.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"meg/workorder/controller/ObjectPage.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/ui/core/Fragment","sap/ui/model/Filter","sap/ui/model/FilterOperator"],function(e,o,r,t,i){"use strict";return e.extend("meg.workorder.controller.ObjectPage",{onInit:function(){}})});
},
	"meg/workorder/controller/WorkOrder.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/ui/core/Fragment","sap/ui/model/Filter","sap/ui/model/FilterOperator"],function(e,t,i,n,o){"use strict";return e.extend("meg.workorder.controller.WorkOrder",{onInit:function(){},onTablePress:function(e){var t=this.getOwnerComponent().getRouter();var i=this.companyKey;var n=this.facilityKey;var o={id:"123"};t.navTo("RouteObjectPage",{id:"123"})},onValueHelpRequest:function(e){var t=e.getSource().getValue(),a=this.getView();if(!this._pValueHelpDialog){this._pValueHelpDialog=i.load({id:a.getId(),name:"sap.m.sample.InputAssisted.ValueHelpDialog",controller:this}).then(function(e){a.addDependent(e);return e})}this._pValueHelpDialog.then(function(e){e.getBinding("items").filter([new n("Name",o.Contains,t)]);e.open(t)})}})});
},
	"meg/workorder/i18n/i18n.properties":'# This is the resource bundle for meg.workorder\r\n\r\n#Texts for manifest.json\r\n\r\n#XTIT: Application name\r\nappTitle=Work Order\r\n\r\n#YDES: Application description\r\nappDescription=A Fiori application.\r\n#XTIT: Main view title\r\ntitle=Work Order\r\nWONo=Work Order #',
	"meg/workorder/localService/mockserver.js":function(){
sap.ui.define(["sap/ui/core/util/MockServer","sap/ui/model/json/JSONModel","sap/base/util/UriParameters","sap/base/Log"],function(e,r,t,a){"use strict";var o,i="meg.workorder/",n=i+"localService/mockdata";var s={init:function(s){var u=s||{};return new Promise(function(s,c){var p=sap.ui.require.toUrl(i+"manifest.json"),f=new r(p);f.attachRequestCompleted(function(){var r=new t(window.location.href),c=sap.ui.require.toUrl(n),p=f.getProperty("/sap.app/dataSources/mainService"),l=sap.ui.require.toUrl(i+p.settings.localUri),d=p.uri&&new URI(p.uri).absoluteTo(sap.ui.require.toUrl(i)).toString();if(!o){o=new e({rootUri:d})}else{o.stop()}e.config({autoRespond:true,autoRespondAfter:u.delay||r.get("serverDelay")||500});o.simulate(l,{sMockdataBaseUrl:c,bGenerateMissingMockData:true});var m=o.getRequests();var g=function(e,r,t){t.response=function(t){t.respond(e,{"Content-Type":"text/plain;charset=utf-8"},r)}};if(u.metadataError||r.get("metadataError")){m.forEach(function(e){if(e.path.toString().indexOf("$metadata")>-1){g(500,"metadata Error",e)}})}var v=u.errorType||r.get("errorType"),w=v==="badRequest"?400:500;if(v){m.forEach(function(e){g(w,v,e)})}o.setRequests(m);o.start();a.info("Running the app with mock data");s()});f.attachRequestFailed(function(){var e="Failed to load application manifest";a.error(e);c(new Error(e))})})},getMockServer:function(){return o}};return s});
},
	"meg/workorder/manifest.json":'{"_version":"1.32.0","sap.app":{"id":"meg.workorder","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","dataSources":{"mainService":{"uri":"/sap/opu/odata/SAP/ZUSPPMEGI01_WORK_ORD_APPROVAL_SRV","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"2.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.0","libs":{"sap.ui.core":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"meg.workorder.i18n.i18n"}},"localModel":{"type":"sap.ui.model.json.JSONModel","settings":{},"uri":"./model/data.json","preload":true},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true,"groupId":"$direct"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"meg.workorder.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteWorkOrder","pattern":"RouteWorkOrder","target":["TargetWorkOrder"]},{"name":"RouteObjectPage","pattern":"RouteObjectPage/{id}","target":["TargetObjectPage"]}],"targets":{"TargetWorkOrder":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"WorkOrder","viewName":"WorkOrder"},"TargetObjectPage":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"ObjectPage","viewName":"ObjectPage"}}},"rootView":{"viewName":"meg.workorder.view.WorkOrder","type":"XML","async":true,"id":"WorkOrder"}}}',
	"meg/workorder/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"meg/workorder/utils/locate-reuse-libs.js":'(function(sap){var e=function(e){var t=e;var n="";var a=["sap.apf","sap.base","sap.chart","sap.collaboration","sap.f","sap.fe","sap.fileviewer","sap.gantt","sap.landvisz","sap.m","sap.ndc","sap.ovp","sap.rules","sap.suite","sap.tnt","sap.ui","sap.uiext","sap.ushell","sap.uxap","sap.viz","sap.webanalytics","sap.zen"];function r(e,t){Object.keys(e).forEach(function(e){if(!a.some(function(t){return e===t||e.startsWith(t+".")})){if(t.length>0){t=t+","+e}else{t=e}}});return t}return new Promise(function(a,i){$.ajax(t).done(function(e){if(e){if(e["sap.ui5"]&&e["sap.ui5"].dependencies){if(e["sap.ui5"].dependencies.libs){n=r(e["sap.ui5"].dependencies.libs,n)}if(e["sap.ui5"].dependencies.components){n=r(e["sap.ui5"].dependencies.components,n)}}if(e["sap.ui5"]&&e["sap.ui5"].componentUsages){n=r(e["sap.ui5"].componentUsages,n)}}a(n)}).fail(function(t){i(new Error("Could not fetch manifest at \'"+e))})})};sap.registerComponentDependencyPaths=function(t){return e(t).then(function(e){if(e&&e.length>0){var t="/sap/bc/ui2/app_index/ui5_app_info?id="+e;var n=jQuery.sap.getUriParameters().get("sap-client");if(n&&n.length===3){t=t+"&sap-client="+n}return $.ajax(t).done(function(e){if(e){Object.keys(e).forEach(function(t){var n=e[t];if(n&&n.dependencies){n.dependencies.forEach(function(e){if(e.url&&e.url.length>0&&e.type==="UI5LIB"){jQuery.sap.log.info("Registering Library "+e.componentId+" from server "+e.url);jQuery.sap.registerModulePath(e.componentId,e.url)}})}})}})}})}})(sap);var scripts=document.getElementsByTagName("script");var currentScript=scripts[scripts.length-1];var manifestUri=currentScript.getAttribute("data-sap-ui-manifest-uri");var componentName=currentScript.getAttribute("data-sap-ui-componentName");var useMockserver=currentScript.getAttribute("data-sap-ui-use-mockserver");sap.registerComponentDependencyPaths(manifestUri).catch(function(e){jQuery.sap.log.error(e)}).finally(function(){sap.ui.getCore().attachInit(function(){jQuery.sap.require("jquery.sap.resources");var e=sap.ui.getCore().getConfiguration().getLanguage();var t=jQuery.sap.resources({url:"i18n/i18n.properties",locale:e});document.title=t.getText("appTitle")});if(componentName&&componentName.length>0){if(useMockserver&&useMockserver==="true"){sap.ui.getCore().attachInit(function(){sap.ui.require([componentName.replace(/\\./g,"/")+"/localService/mockserver"],function(e){e.init();sap.ushell.Container.createRenderer().placeAt("content")})})}else{sap.ui.require(["sap/ui/core/ComponentSupport"]);sap.ui.getCore().attachInit(function(){jQuery.sap.require("jquery.sap.resources");var e=sap.ui.getCore().getConfiguration().getLanguage();var t=jQuery.sap.resources({url:"i18n/i18n.properties",locale:e});document.title=t.getText("appTitle")})}}else{sap.ui.getCore().attachInit(function(){sap.ushell.Container.createRenderer().placeAt("content")})}});sap.registerComponentDependencyPaths(manifestUri);\n',
	"meg/workorder/view/ObjectPage.view.xml":'<mvc:View xmlns:mvc="sap.ui.core.mvc"\r\n    xmlns="sap.m"\r\n    xmlns:uxap="sap.uxap"\r\n    xmlns:core="sap.ui.core"\r\n    xmlns:l="sap.ui.layout"\r\n    xmlns:f="sap.ui.layout.form" height="100%"><Page><content><uxap:ObjectPageLayout id="ObjectPageLayout" enableLazyLoading="true" useIconTabBar="false" upperCaseAnchorBar="false"><uxap:headerTitle><uxap:ObjectPageDynamicHeaderTitle><uxap:heading><Title text="Work Order" wrapping="true"/></uxap:heading></uxap:ObjectPageDynamicHeaderTitle></uxap:headerTitle><uxap:headerContent><VBox class="sapUiSmallMargin"><f:SimpleForm id="SimpleFormDisplaywideDual" title="" editable="false" layout="ResponsiveGridLayout" labelSpanXL="4" labelSpanL="4" labelSpanM="4" labelSpanS="12" adjustLabelSpan="false" emptySpanXL="0" emptySpanL="4" emptySpanM="0" emptySpanS="0" columnsXL="2" columnsL="2" columnsM="2" singleContainerFullSize="false"><f:content><core:Title text="" /><Label text="Work Order #" /><Text id="nameText" text="Work Order" /><Label text="Plant" /><Text id="countryText" text="Plant" /><Label text="Order Type and Des." /><Text text="Order Type and Des." /><Label text="Planner Group" /><Text text="Planner Group" /><core:Title text="" /><Label text="Work Center" /><Text text="Work Center" /><Label text="Func. Loc" /><Text text="Func. Loc" /><Label text="Equipment" /><Text text="Equipment" /></f:content></f:SimpleForm></VBox></uxap:headerContent><uxap:sections><uxap:ObjectPageSection titleUppercase="false" id="orderOpsID" title="Order Operations"><uxap:subSections><uxap:ObjectPageSubSection id="orderOpsID1" title="Order Operations" titleUppercase="false"><uxap:blocks><VBox><Table id="orderOpID" items="{localModel>/orderOperations}" width="22rem"><columns><Column width="11rem"></Column><Column width="11rem"></Column></columns><items><ColumnListItem press="onTablePress" vAlign="Middle"><cells><Text text="{localModel>OPNo}" wrapping="false"/><Text text="{localModel>OPDes}" wrapping="false"/></cells></ColumnListItem></items></Table></VBox></uxap:blocks></uxap:ObjectPageSubSection></uxap:subSections></uxap:ObjectPageSection><uxap:ObjectPageSection titleUppercase="false" id="eqipID" title="Equipment BOM Items"><uxap:subSections><uxap:ObjectPageSubSection id="eqipID1" title="Equipment BOM Items" titleUppercase="false"><uxap:blocks><VBox><Table id="equiBOMID" items="{localModel>/equipBOMItems}" mode="MultiSelect"><columns><Column width="11rem"><Label text="Part"/></Column><Column width="11rem"><Label text="Part Description"/></Column><Column width="11rem"><Label text="BOM Quantity"/></Column><Column width="11rem"><Label text="Desired Quantity"/></Column><Column width="11rem"><Label text="Operation"/></Column></columns><items><ColumnListItem press="onTablePress" vAlign="Middle"><cells><Text text="{localModel>part}" wrapping="false"/><Text text="{localModel>partDesc}" wrapping="false"/><Text text="{localModel>BOMQty}" wrapping="false"/><Text text="{localModel>desiredQty}" wrapping="false"/><Text text="{localModel>operation}" wrapping="false"/></cells></ColumnListItem></items></Table></VBox></uxap:blocks></uxap:ObjectPageSubSection></uxap:subSections></uxap:ObjectPageSection><uxap:ObjectPageSection titleUppercase="false" id="addPart" title="Additional Part Items"><uxap:subSections><uxap:ObjectPageSubSection id="addPart1" title="Additional Part Items" titleUppercase="false"><uxap:blocks><VBox><Table id="addPartItemsID" items="{localModel>/addPartsItems}"><headerToolbar><OverflowToolbar><content><Title text="" level="H2"/><ToolbarSpacer /><Button text="Add" press="" /><Button text="Edit" press="" /><Button text="Delete" press="" /></content></OverflowToolbar></headerToolbar><columns><Column width="11rem"><Label text="Part"/></Column><Column width="11rem"><Label text="Part Description"/></Column><Column width="11rem"><Label text="Desired Quantity"/></Column><Column width="11rem"><Label text="Operation"/></Column></columns><items><ColumnListItem press="onTablePress" vAlign="Middle"><cells><Text text="{localModel>part}" wrapping="false"/><Text text="{localModel>partDesc}" wrapping="false"/><Text text="{localModel>desiredQty}" wrapping="false"/><Text text="{localModel>operation}" wrapping="false"/></cells></ColumnListItem></items></Table></VBox></uxap:blocks></uxap:ObjectPageSubSection></uxap:subSections></uxap:ObjectPageSection></uxap:sections></uxap:ObjectPageLayout></content><footer><Toolbar><ToolbarSpacer/><Button text="Pass to Work Order Reservation" press="" type="Emphasized"/></Toolbar></footer></Page></mvc:View>\r\n',
	"meg/workorder/view/ObjectPage1.view.xml":'<mvc:View controllerName="meg.workorder.controller.ObjectPage"\r\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\r\n    xmlns="sap.m"\r\n    xmlns:core="sap.ui.core"\r\n    xmlns:l="sap.ui.layout"\r\n    xmlns:f="sap.ui.layout.form"><Page id="objectPage" title="{i18n>title}"><content><VBox class="sapUiSmallMargin"><f:SimpleForm id="SimpleFormDisplay354wideDual" editable="false" layout="ResponsiveGridLayout" title="" labelSpanXL="4" labelSpanL="3" labelSpanM="4" labelSpanS="12" adjustLabelSpan="false" emptySpanXL="0" emptySpanL="4" emptySpanM="0" emptySpanS="0" columnsXL="2" columnsL="2" columnsM="2" singleContainerFullSize="false"><f:content><core:Title text="" /><Label text="Work Order #" /><Text id="nameText" text="Work Order" /><Label text="Plant" /><Text id="countryText" text="Plant" /><Label text="Order Type and Des." /><Text text="Order Type and Des." /><Label text="Planner Group" /><Text text="Planner Group" /><core:Title text="" /><Label text="Work Center" /><Text text="Work Center" /><Label text="Func. Loc" /><Text text="Func. Loc" /><Label text="Equipment" /><Text text="Equipment" /></f:content></f:SimpleForm></VBox><VBox><Table id="orderOpID" items="{localModel>/orderOperations}"><headerToolbar><OverflowToolbar><ToolbarSpacer/><Title text="Order Operations" level="H2"/><ToolbarSpacer/></OverflowToolbar></headerToolbar><columns><Column width="11rem"></Column><Column width="11rem"></Column></columns><items><ColumnListItem press="onTablePress" vAlign="Middle"><cells><Text text="{localModel>OPNo}" wrapping="false"/><Text text="{localModel>OPDes}" wrapping="false"/></cells></ColumnListItem></items></Table></VBox><VBox><OverflowToolbar><Title text="" level="H2"/></OverflowToolbar></VBox><VBox><Table id="equiBOMID" items="{localModel>/equipBOMItems}"><headerToolbar><OverflowToolbar><ToolbarSpacer/><Title text="Equipment BOM Items" level="H2"/><ToolbarSpacer/></OverflowToolbar></headerToolbar><columns><Column width="11rem"><Label text="Part"/></Column><Column width="11rem"><Label text="Part Description"/></Column><Column width="11rem"><Label text="BOM Quantity"/></Column><Column width="11rem"><Label text="Desired Quantity"/></Column><Column width="11rem"><Label text="Operation"/></Column><Column width="11rem"><Label text="Select"/></Column></columns><items><ColumnListItem press="onTablePress" vAlign="Middle"><cells><Text text="{localModel>part}" wrapping="false"/><Text text="{localModel>partDesc}" wrapping="false"/><Text text="{localModel>BOMQty}" wrapping="false"/><Text text="{localModel>desiredQty}" wrapping="false"/><Text text="{localModel>operation}" wrapping="false"/><CheckBox text="" selected="false"/></cells></ColumnListItem></items></Table></VBox><VBox><OverflowToolbar><Title text="" level="H2"/></OverflowToolbar></VBox><VBox><Table id="addPartItemsID" items="{localModel>/addPartsItems}"><headerToolbar><OverflowToolbar><ToolbarSpacer/><Title text="Additional Part Items" level="H2"/><ToolbarSpacer/></OverflowToolbar></headerToolbar><columns><Column width="11rem"><Label text="Part"/></Column><Column width="11rem"><Label text="Part Description"/></Column><Column width="11rem"><Label text="Desired Quantity"/></Column><Column width="11rem"><Label text="Operation"/></Column></columns><items><ColumnListItem press="onTablePress" vAlign="Middle"><cells><Text text="{localModel>part}" wrapping="false"/><Text text="{localModel>partDesc}" wrapping="false"/><Text text="{localModel>desiredQty}" wrapping="false"/><Text text="{localModel>operation}" wrapping="false"/></cells></ColumnListItem></items></Table></VBox><VBox><Toolbar><ToolbarSpacer/><Button text="Pass to Work Order Reservation" press="onOpen"/></Toolbar></VBox></content></Page></mvc:View>\r\n',
	"meg/workorder/view/WorkOrder.view.xml":'<mvc:View controllerName="meg.workorder.controller.WorkOrder"\r\n\txmlns:mvc="sap.ui.core.mvc" displayBlock="true"\r\n\txmlns="sap.m"\r\n\txmlns:l="sap.ui.layout"\r\n\txmlns:f="sap.ui.layout.form"\r\n\txmlns:core="sap.ui.core"\r\n\txmlns:sapf="sap.f"\r\n\txmlns:fb="sap.ui.comp.filterbar"\r\n\txmlns:sfb="sap.ui.comp.smartfilterbar"\r\n\txmlns:smartTable="sap.ui.comp.smarttable"><Shell id="shell"><App id="app"><pages><Page id="page" title="{i18n>title}"><content><fb:FilterBar id="FilterBar" clear="onResetFilters" reset="onReset" showRestoreButton="false" showClearButton="false" showClearOnFB="true" showGoOnFB="false" filterBarExpanded="true"><fb:filterGroupItems><fb:FilterGroupItem groupName="G1" name="Work Order #" label="Work Order #" visibleInFilterBar="true"><fb:control><MultiComboBox id="idWO" items="{path: \'\'}" selectedKeys="" selectionChange=""><core:Item key="" text="" /></MultiComboBox></fb:control></fb:FilterGroupItem><fb:FilterGroupItem groupName="G1" name="Plant" label="Plant" visibleInFilterBar="false"><fb:control><MultiComboBox id="idPlant" items="{path: \'\'}" selectedKeys="" selectionChange=""><core:Item key="" text="" /></MultiComboBox></fb:control></fb:FilterGroupItem><fb:FilterGroupItem groupName="G1" name="Order Type" label="Order Type" visibleInFilterBar="false"><fb:control><MultiComboBox id="idOrderType" items="{path: \'\'}" selectionChange="" selectedKeys=""><core:Item key="" text="" /></MultiComboBox></fb:control></fb:FilterGroupItem><fb:FilterGroupItem groupName="G1" name="Planner Group" label="Planner Group" visibleInFilterBar="false"><fb:control><MultiComboBox id="idPlannerGroup" items="{path: \'\'}" selectionChange="" selectedKeys=""><core:Item key="" text="" /></MultiComboBox></fb:control></fb:FilterGroupItem><fb:FilterGroupItem groupName="G1" name="Work Center" label="Work Center" visibleInFilterBar="false"><fb:control><MultiComboBox items="{path: \'\'}" selectionChange="" selectedKeys=""><core:Item key="" text="" /></MultiComboBox></fb:control></fb:FilterGroupItem><fb:FilterGroupItem groupName="G1" name="Func Loc" label="Func Loc" visibleInFilterBar="false" class="sapUiSizeCompact sapUiLargeMarginTop"><fb:control><MultiComboBox items="{path: \'\'}" selectionChange="" selectedKeys=""><core:Item key="" text="" /></MultiComboBox></fb:control></fb:FilterGroupItem><fb:FilterGroupItem groupName="G1" name="Equipment" label="Equipment" visibleInFilterBar="false"><fb:control><MultiComboBox items="{path: \'\'}" selectionChange="" selectedKeys=""><core:Item key="" text="" /></MultiComboBox></fb:control></fb:FilterGroupItem></fb:filterGroupItems></fb:FilterBar><VBox><Table id="workOrderID" items="{localModel>/workOrder}" mode="Navigation"><columns><Column width="11rem"><Label text="Work Order"/></Column><Column width="11rem"><Label text="Plant"/></Column><Column width="11rem"><Label text="Order Type"/></Column><Column width="6rem" hAlign="End"><Label text="Planner Group"/></Column><Column width="6rem" hAlign="End"><Label text="Work Center"/></Column><Column width="6rem" hAlign="End"><Label text="Func Loc"/></Column><Column width="6rem" hAlign="End"><Label text="Equipment"/></Column></columns><items><ColumnListItem press="onTablePress" vAlign="Middle" type="Navigation"><cells><Text text="{localModel>workOrder}" wrapping="false"/><Text text="{localModel>plant}" wrapping="false"/><Text text="{localModel>orderType}" wrapping="false"/><Text text="{localModel>plannerGroup}" wrapping="false"/><Text text="{localModel>workCenter}" wrapping="false"/><Text text="{localModel>funcLoc}" wrapping="false"/><Text text="{localModel>equipment}" wrapping="false"/></cells></ColumnListItem></items></Table></VBox></content></Page></pages></App></Shell></mvc:View>\r\n'
});
//# sourceMappingURL=Component-preload.js.map