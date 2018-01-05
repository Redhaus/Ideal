
  // onClick handler

  export const readingData = [];
  export const lexisData = [];
  export const alldata = [];

  export const handleOnClick = (e, data) => {
    
      // const refer to parent element of selection
      const activeTarget = e.target.parentNode.parentNode;
// console.log(lexisData)

      // compose selections made into object and push object into array

      const info = {
          title: data.label,
          description: data.desc
        }

        if(data.cat === 'LEXIS'){
          lexisData.push(info);
        }

        if(data.cat === 'PRIMARY'){
          readingData.push(info);

        }

        alldata.push(info);


  
        
        console.log(alldata);
        
      // selectedData.push(info);
      // console.log(selectedData);

        
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

  // popup size and styles
  export const popSize = "small"
  

  export const style = {
    borderRadius: 5,
    opacity: 0.9,
    padding: '2em',
    width:'40em'
    
  }

  // icon styles
  export const iconColor = "red"
  export const iconSize = "large"



export const toggleVisibility = () => this.setState(() => ({
  visible: !this.state.visible
})
);

// ICONS
// file text outline
// plus square outline
// plus
// elipseys
// Comment
// comment outline
// external
// add circle