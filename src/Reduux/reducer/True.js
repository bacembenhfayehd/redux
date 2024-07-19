export const second = (state = { z : 'no'} , action) => {
    switch (action.type) {
        case  'No' : 
        return {z : 'False'} ;

        case 'Yes' : 

        return {z : 'True'};

        default : 
        return state ;
    }

}