

export const getVisibility = (list, filter, title) => {

    const newState = [];
    
    switch (filter) {
        
        case 'SHOW_ALL':
            return list

        case 'SHOW_CITY':
            

            
            list.map((item) => {
                if (item.valueNames) {
                    if (item.valueNames.includes('city')) {
                        return newState.push(item)
                    }
                }
                return [];
            })

            return newState



        case 'SHOW_NAME':

            
            list.map((item) => {
                if (item.valueNames) {
                    if (item.valueNames.includes('name')) {
                        return newState.push(item)
                    }
                }
                return [];
            })

            return newState


        case 'SHOW_PIE':
            
            
            list.map((item) => {
                if (item.valueNames) {
                    if (item.valueNames.includes('pie')) {
                        return newState.push(item)
                    }
                }
                return [];
            })

            return newState


        default:
            break;
    }


}












// WORKING IF CONDITIONAL


    // this.props.setFilter(filter, title)

    // console.log('get visibility func called')
    // console.log(filter)
    // const newState = [] //beginning

    // if (filter === 'SHOW_CITY') {

    //     list.map((item) => {
    //         if (item.valueNames) {
    //             item.valueNames.includes(filter)
    //             // console.log('sortList')
    //             console.log('city: ', newState)

    //             return newState.push(item)
    //         }
    //         return []
    //     })
    //     console.log('cityRendered')

    //     return newState

    // }


    // // this works ////
    // if (filter === 'SHOW_NAME') {

    //     const newState = []

    //     list.map((item) => {
    //         if (item.valueNames) {
    //             if (item.valueNames.includes('name')) {
    //                 return newState.push(item)
    //             }
    //         }

    //         return [];

    //     })
    //     console.log(newState)
    //     return newState

    // } else {
    //     console.log('renderFullList')
    //     return list;
    // }

    //end