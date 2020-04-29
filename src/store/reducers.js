import { contactConstants } from './constants';
const filterContacts = (arr, term) => {
    return arr.filter(obj => Object.keys(obj).some(key => (key !== 'profile_image') && (new RegExp(term, 'ig')).test(obj[key])));
}

export function contacts(state = {contacts:[], filtered:[], term: null, loading: false}, action) {
   
    switch (action.type) {
        case contactConstants.REQUEST:  
            return  {     
                ...state,           
                loading: true 
            };           
        case contactConstants.SUCCESS:       
           const {contacts} =  action;
            return  {     
                ...state,           
                contacts,
                filtered: contacts,
                loading: false
            };
            
        case contactConstants.FILTERED:  
            let {term} = action;
            let filtered = filterContacts(state.contacts, term)
            return {                
                ...state,
                term,
                filtered
            };

          
        case contactConstants.FILTER_CLEANED:
            return {    
                ...state,
                term: '',
                filtered: state.contacts
            }; 
            
    
        default:
            return state
    }
} 
export default contacts;