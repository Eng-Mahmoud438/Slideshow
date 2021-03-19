var mes=window.prompt("put your name, please");
if(mes=="Shiyar"||mes=="Shiyar Team"){
    alert("Hello my cheachers");
}
else{
    alert("Error name");
    window.close();
}
class Slider{
    constructor(){
this.images=[];
this.images[0]="BS.png";
this.images[1]="html.png";
this.images[2]="css.png";
this.link=[];
this.link[0]="https://www.youtube.com/watch?v=Sfhsw8RieCg&list=PLMTdZ61eBnyrPiX-b1MNG-MSPAJ0OgpHA";
this.link[1]="https://www.youtube.com/watch?v=Wn3bVMLYHhs&list=PLMTdZ61eBnyrnapIyOphXAkIcR5DDOGkz";
this.link[2]="https://www.youtube.com/watch?v=eN8JBvxdwME&list=PLMTdZ61eBnyoxjc9Prw0uhwgp6YZ2-_sg";
this.count=0;
this.playSlider();
setInterval(()=>{
    this.playSlider();  
},3000);
    }
    playSlider(){
        if(this.count<this.images.length-1){
this.count++;
        }else{
            this.count=0;
        }
        document.Img.src=this.images[this.count];
        document.getElementById("LinkImg").href=this.link[this.count];
    }
}
onload=new Slider();