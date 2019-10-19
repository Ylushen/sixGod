# vue0807

## element-ui 
###一. Popup 遮罩层调用

 1. 引入elementUI混入 ：`import Popup from 'element-ui/src/utils/popup';`
 2. 在mounted方法中执行open方法：
    ````
    mounted() {
       if (this.visible) {
       // 设置为开启状态
         this.rendered = true;
         this.open();
       }
     }
    ````

 3. 在调用时传入属性控制：
     ````
       是否生成遮罩模型： model:boolean  
       是否将模型插入到body中： modalAppendToBody:boolean 
       是否能够按ESC退出遮罩：closeOnPressEscape:boolean 
       是否支持点击遮罩层关闭：closeOnClickModal:boolean 
     ````


