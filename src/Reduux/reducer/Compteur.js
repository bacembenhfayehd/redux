export const reducer = (state = { x : 0} , action) => {
    switch (action.type) {
        case 'plus' : 
        return {x : state.x + 1} ;

        case 'moins' : 

        return {x : state.x - 1};

        default : 
        return state ;
    }

}