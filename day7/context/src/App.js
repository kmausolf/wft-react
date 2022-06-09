import { ContactsProvider } from "./providers/ContactsProvider";
import Contacts from "./contacts/Contacts";

function App() {
  return (
    <ContactsProvider>
      <Contacts/>
    </ContactsProvider>
  );
}

export default App;
