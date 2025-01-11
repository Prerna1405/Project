long=()=>
    {
      let date=new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let year=date.getFullYear();
      let dt=date.getDate();
     
    
      let month = date.toLocaleString('en-US', { month: 'long' });
      let day = date.toLocaleString('en-US', { weekday: 'long' });
      let ampm = hours >= 12 ? 'PM' : 'AM';
      let hrs = hours % 12 || 12;
      let hour = hrs.toString().padStart(2, '0');
      let min = minutes  < 10 ? '0' : ' ';
      let sec = seconds  < 10 ? '0' : ' ';
    
      let formattedTime=`${hour}: ${min}${minutes} : ${sec}${seconds} ${ampm}`;
     let clk=document.getElementById("p").innerHTML=`${day} ${dt} ${month} ${year}`;
     let time=document.getElementById("date").innerHTML=`${formattedTime}`;
    }
    
    
    setInterval(long,1000)