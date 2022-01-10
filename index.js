$.ajax({
    type: "POST",
    url: "http://127.0.0.1:5000/infoBus",
    datatype: "html",
    success: function (response) {
      console.log(response);
      if(response=="no data"){
          console.log("No data in DB");
      }
      let res=response[0].seat
      for(let i=0;i<res.length;i++){
        if(res[i]['availability']==1){
            document.getElementById(res[i]['_id']).style.color= "red";
        }
        if(res[i]['availability']==0){
            console.log(res[i]['_id'])
            document.getElementById(res[i]['_id']).style.color= "black";
        }
      }
    },
    error: function (error) {
      console.log("Error in API");
    },
});
