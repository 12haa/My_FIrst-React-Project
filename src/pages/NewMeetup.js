import NewMeetupForm from "../components/layout/meetups/NewMeetupForm";
import { useNavigate, useHistory } from "react-router-dom";
function NewMeetup() {
  const navigate = useNavigate();
  function addMeetupHandler(meetupData) {
    console.log(meetupData);

    fetch(
      "https://react-getting-started-68208-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
      }
    ).then(() => {
      navigate("/", { replace: true });
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetup;
