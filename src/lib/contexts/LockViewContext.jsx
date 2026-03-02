// LockViewContext.js
import { createContext, useContext, useState, useEffect } from "react";

const LockViewContext = createContext(null);


export function LockViewProvider({ children }) {
  const [lockView, setLockView] = useState(true);

  useEffect(() => {
    console.log("lockView changed:", lockView);
  }, [lockView]);

  return (
    <LockViewContext.Provider value={{ lockView, setLockView }}>
      {children}
    </LockViewContext.Provider>
  );
}

export function useLockView() {
  return useContext(LockViewContext);
}
