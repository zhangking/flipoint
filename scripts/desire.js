function getStyle(obj,attr)        
{
       return $(obj).css(attr);
};

//�˶����
function startMove(i,obj,attr,iMarget,fn)
{      
        var timer=null;
        var iSpeed=0;
        clearInterval(obj.timer);
        obj.timer=setInterval(function(){
                var iCur=0;
                if(attr=='opacity')
                {
                        iCur=parseInt(parseFloat(getStyle(obj,attr))*100);
                }
                else
                {
                        iCur=parseInt(getStyle(obj,attr))
                }
				
                var iSpeed=(iMarget-iCur)/i;
		        iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
                if(iCur==iMarget)
                {
                        clearInterval(obj.timer);
                        if(fn)
                        {
                                fn(); 
                        }
                }
                else
                {
                        if(attr=='opacity')
                        {         
                                obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
                                obj.style.opacity=(iCur+iSpeed)/100;
								
                        }
                        else
                        {
                                $(obj).css(attr,iCur+iSpeed);
                        }
                }
        },30);
		
};

function slide(){
	var i=0;
	var j=0;
	var x=1;
	var left = $("#left");
	var right = $("#right");
	var width=  parseInt($("#index").css("width"));
	return function(){
	     	left.live("click",function(){
						     if(--i>=0){
								 if(i!=2){$("#iframe").hide();}
								        startMove(8,$("#main")[0],'margin-left',-i*width);
							            startMove(4,$("#b_main")[0],'margin-left',(i-3)*width);
										}
									   else i=0;
							  		   
									   
									   });
			right.live("click",function(){
							if(++i<4) {
								if(i!=2){$("#iframe").hide();}
								        if(i&&x){
											var c=0;
											
											
										    var int = self.setInterval(function(){
													if(c==4){int=window.clearInterval(int);x=0;$("#technology").show("slow")};
													 c++;
													$("#p"+c).show('slow');			
																  },1000);
											}
								        startMove(8,$("#main")[0],'margin-left',-i*width);
										startMove(4,$("#b_main")[0],'margin-left',(i-3)*width);
							           } 
									  else {
										  i=0;
										  startMove(8,$("#main")[0],'margin-left',-i*width);
										  startMove(4,$("#b_main")[0],'margin-left',(i-3)*width);
										  }
										
										
										});
		                                
		}

}

function init(){
	 startMove(2,$("#yuyan")[0],'margin-left',0);
	 startMove(2,$("#gongju")[0],'margin-left',0);
	 startMove(2,$("#kuangjia")[0],'margin-left',0);
	 $("#ayuyan").hide();
	 $("#agongju").hide();
	 $("#akuangjia").hide();
	}

$("#yuyan").click(function(){
						   init();
						   startMove(8,this,'margin-left',100);
						   $("#ayuyan").show('slow');
						   });
$("#gongju").click(function(){
							 init();
						   startMove(8,this,'margin-left',100);
						   $("#agongju").show('slow');
						   });
$("#kuangjia").click(function(){
							   init();
						   startMove(8,this,'margin-left',100);
						    $("#akuangjia").show('slow');
						   });

$("#dis_think").click(function(){
							   
							  startMove(10,$(this).find("div"),'font-size',50);
							  
							   
							   
							   })