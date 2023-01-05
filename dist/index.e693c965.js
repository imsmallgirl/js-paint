class DrawingBoard{MODE="NONE";IsMouseDown=!1;eraserColor="#ffffff";backgroundColor="#ffffff";IsNavigatorVisible=!1;undoArray=[];containerEl;canvasEl;toolbarEl;brushEl;colorPickerEl;brushPanelEl;brushSliderEl;brushSizePreviewEl;eraserEl;navigatorEl;navigatorImageContainerEl;navigatorImageEl;undoEl;clearEl;downloadLinkEl;constructor(){this.assignElement(),this.initContext(),this.initCanvasBackgroundColor(),this.addEvent()}assignElement(){this.containerEl=document.getElementById("container"),this.canvasEl=this.containerEl.querySelector("#canvas"),this.toolbarEl=this.containerEl.querySelector("#toolbar"),this.brushEl=this.toolbarEl.querySelector("#brush"),this.colorPickerEl=this.toolbarEl.querySelector("#colorPicker"),this.brushPanelEl=this.containerEl.querySelector("#brushPanel"),this.brushSliderEl=this.brushPanelEl.querySelector("#brushSize"),this.brushSizePreviewEl=this.brushPanelEl.querySelector("#brushSizePreview"),this.eraserEl=this.toolbarEl.querySelector("#eraser"),this.navigatorEl=this.toolbarEl.querySelector("#navigator"),this.navigatorImageContainerEl=this.containerEl.querySelector("#imgNav"),this.navigatorImageEl=this.navigatorImageContainerEl.querySelector("#canvasImg"),this.undoEl=this.toolbarEl.querySelector("#undo"),this.clearEl=this.toolbarEl.querySelector("#clear"),this.downloadLinkEl=this.toolbarEl.querySelector("#download")}initContext(){this.context=this.canvasEl.getContext("2d")}initCanvasBackgroundColor(){this.context.fillStyle=this.backgroundColor,this.context.fillRect(0,0,this.canvasEl.width,this.canvasEl.height)}addEvent(){this.brushEl.addEventListener("click",this.onClickBrush.bind(this)),this.canvasEl.addEventListener("mousedown",this.onMouseDown.bind(this)),this.canvasEl.addEventListener("mousemove",this.onMouseMove.bind(this)),this.canvasEl.addEventListener("mouseup",this.onMouseUp.bind(this)),this.canvasEl.addEventListener("mouseout",this.onMouseOut.bind(this)),this.brushSliderEl.addEventListener("input",this.onChangeBrushSize.bind(this)),this.colorPickerEl.addEventListener("input",this.onChangeColor.bind(this)),this.eraserEl.addEventListener("click",this.onClickEraser.bind(this)),this.navigatorEl.addEventListener("click",this.onClickNavigator.bind(this)),this.undoEl.addEventListener("click",this.onClickUndo.bind(this)),this.clearEl.addEventListener("click",this.onClickClear.bind(this)),this.downloadLinkEl.addEventListener("click",this.onClickDownload.bind(this))}onClickDownload(){this.downloadLinkEl.href=this.canvasEl.toDataURL("image/jpeg",1),this.downloadLinkEl.download="example.jpeg"}onClickClear(){this.context.clearRect(0,0,this.canvasEl.width,this.canvasEl.height),this.undoArray=[],this.updateNavigator(),this.initCanvasBackgroundColor()}onClickUndo(){if(0===this.undoArray.length)return void alert("더이상 실행취소 불가합니다");let t=this.undoArray.pop(),i=new Image;i.onload=()=>{this.context.clearRect(0,0,this.canvasEl.width,this.canvasEl.height),this.context.drawImage(i,0,0,this.canvasEl.width,this.canvasEl.height,0,0,this.canvasEl.width,this.canvasEl.height)},i.src=t}saveState(){this.undoArray.length>4?(this.undoArray.shift(),this.undoArray.push(this.canvasEl.toDataURL())):this.undoArray.push(this.canvasEl.toDataURL())}onClickNavigator(t){this.IsNavigatorVisible=!t.currentTarget.classList.contains("active"),t.currentTarget.classList.toggle("active"),this.navigatorImageContainerEl.classList.toggle("hide"),this.updateNavigator()}updateNavigator(){this.IsNavigatorVisible&&(this.navigatorImageEl.src=this.canvasEl.toDataURL())}onClickEraser(t){const i=t.currentTarget.classList.contains("active");this.MODE=i?"NONE":"ERASER",this.canvasEl.style.cursor=i?"default":"crosshair",this.brushPanelEl.classList.add("hide"),t.currentTarget.classList.toggle("active"),this.brushEl.classList.remove("active")}onMouseOut(){"NONE"!==this.MODE&&(this.IsMouseDown=!1,this.updateNavigator())}onChangeColor(t){this.brushSizePreviewEl.style.backgroundColor=t.target.value}onChangeBrushSize(t){this.brushSizePreviewEl.style.width=`${t.target.value}px`,this.brushSizePreviewEl.style.height=`${t.target.value}px`}onMouseUp(){"NONE"!==this.MODE&&(this.IsMouseDown=!1,this.updateNavigator())}onMouseDown(t){if("NONE"===this.MODE)return;this.IsMouseDown=!0;const i=this.getMousePosition(t);this.context.beginPath(),this.context.moveTo(i.x,i.y),this.context.lineCap="round","BRUSH"===this.MODE?(this.context.strokeStyle=this.colorPickerEl.value,this.context.lineWidth=this.brushSliderEl.value):"ERASER"===this.MODE&&(this.context.strokeStyle=this.eraserColor,this.context.lineWidth=50),this.saveState()}onMouseMove(t){if(!this.IsMouseDown)return;const i=this.getMousePosition(t);this.context.lineTo(i.x,i.y),this.context.stroke()}getMousePosition(t){const i=this.canvasEl.getBoundingClientRect();return{x:t.clientX-i.left,y:t.clientY-i.top}}onClickBrush(t){const i=t.currentTarget.classList.contains("active");this.MODE=i?"NONE":"BRUSH",this.canvasEl.style.cursor=i?"default":"crosshair",this.brushPanelEl.classList.toggle("hide"),t.currentTarget.classList.toggle("active"),this.eraserEl.classList.remove("active")}}new DrawingBoard;
//# sourceMappingURL=index.e693c965.js.map