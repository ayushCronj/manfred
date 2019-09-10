
interface IAoiState {
    
  }
  
  const initialAoiState: IAoiState = {
   
  };

  export default function aois(
    state: IAoiState = initialAoiState,
    action: any
  ): IAoiState {
    const { type, payload } = action;
  
    switch (type) {
      case '':
        return {
          ...state,
          loading: true
        };
    
     default:
    return state;
    

  }
}