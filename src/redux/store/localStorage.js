// convert object to string and store in localStorage
export const saveToLocalStorage = (state)=>{
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("persistentState", serialisedState);
    } catch (e) {
      console.warn(e);
    }
}
  
  // load string from localStarage and convert into an Object
  // invalid output must be undefined
  export const loadFromLocalStorage = () => {
    try {
      const serialisedState = localStorage.getItem("persistentState");
      if (serialisedState === null) return undefined;
      let completeState = JSON.parse(serialisedState);
      return { 
            authlocal : completeState.authlocal,
            cookieconsent: completeState.cookieconsent
        };
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }