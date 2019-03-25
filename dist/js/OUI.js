;(function (){
	var body = document.body;	//获取body
	OUI = {
		dialog: {
			//taost
			toast:function(req){

				//防止重复生成多次
				var OUITOAST = document.getElementById('OUI-TOAST');
				if(OUITOAST != null){
					return false;
				}

				//toast内容和时间
				var content = "我是toast";
				var duration = 2000;
				var icon = 'none';

				//是否传参
				if(req){
					content = req.content || "我是toast";
					duration = req.duration || 2000;
					icon = req.icon || 'none';
				}
				
				//toast的遮罩层：div.class= mask-white-dialog
				var toastMask = document.createElement('div');	
				toastMask.className = 'mask-white-dialog';
				toastMask.id = 'OUI-TOAST';

				//toast的icon层
				var toastIcon = document.createElement('div');

				//toast的内容层：div.class= m-toast none-icon
				var toastPanel = document.createElement('div');
				toastPanelClssName = ''

				//是否显示icon，icon只有success和error
				if(icon == 'success' || icon == 'error'){
					toastPanelClssName = 'm-toast';
					toastIcon.className = "toast-"+icon+"-ico";
					toastPanel.appendChild(toastIcon);
				}else {
					toastPanelClssName = 'm-toast none-icon'
				}
				toastPanel.className = toastPanelClssName;

				//toast的文本层：p.class= toast-content
				var toastText = document.createElement('p');
				toastText.className = 'toast-content';
				toastText.innerHTML = content;

				//body显示lDialog
				toastPanel.appendChild(toastText);
				toastMask.appendChild(toastPanel);
				body.appendChild(toastMask);

				//关闭lDialog
				setTimeout(function(){
					body.removeChild(toastMask);
				},duration);				
				
			}
		}
}})();