export interface User {
    id: string;
    name: string;
    email: string;
    // Add other user properties as needed
  }
  
  export interface AuthContextType {
    user: User | null;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => void;
    signUp: (name: string, email: string, password: string) => Promise<void>;
    // Add other authentication methods as needed
  }