
  // onClick handler

  export const selectedData = [];

  export const handleOnClick = (e, data) => {
    
      // const refer to parent element of selection
      const activeTarget = e.target.parentNode.parentNode;

      // compose selections made into object and push object into array
      const info = {
          title: data.label,
          description: data.desc
        }
    
      selectedData.push(info);
      console.log(selectedData);


      // add an remove classes if item clicked
      if(data.checked){
        return activeTarget.className += " active";
      }else{
        return activeTarget.classList.remove("active");
      }
  }

  
  // export const handleList = (lists, title, popup) => {
        
  //     return lists.map( (item, key) => {
  

  
  //       const template = (
  //         <Popup key={key} trigger={title} content={popup} size='tiny' />
  //       )
        
  //       return template; 

  //     })
  // }