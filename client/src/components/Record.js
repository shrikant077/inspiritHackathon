import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import '../index.css'
export default function Record() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:5050",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      return status
        ? console.log(user)
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  // const Logout = () => {
  //   removeCookie("token");
  //   navigate("/signup");
  // };

  const [form, setForm] = useState({
    eventname: "",
    club: "",
    venue: "",
    date: "",
    timeslot: "",
  });
  const [isNew, setIsNew] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [update, setUpdate] = useState(false);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedVenue, setSelectedVenue] = useState("");

  const params = useParams();
  // const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      fetchAvailableTimeSlots(selectedDate, selectedVenue);
      const id = params.id?.toString() || undefined;
      if (!id) return;
      setIsNew(false);
      const response = await fetch(`http://localhost:5050/find/${params.id.toString()}`);
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const record = await response.json();
      if (!record) {
        console.warn(`Record with id ${id} not found`);
        navigate("/events");
        return;
      }
      setUpdate(true);
      setForm(record);
    }
    fetchData();
    return;
  }, [params.id, navigate, selectedDate, selectedVenue]);

  // These methods will update the state properties.
  // const toggleOther = () => {
  //   setShowInput((prev) => !prev);
  // };

  useEffect(() => {
    if (selectedDate && selectedVenue) {
      fetchAvailableTimeSlots(selectedDate, selectedVenue);
    }
  }, [selectedDate, selectedVenue]);

  async function fetchAvailableTimeSlots(date, venue) {
    try {
      const response = await fetch(`http://localhost:5050/available/${date}/${venue}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const slots = await response.json();
      setAvailableTimeSlots(slots);
    } catch (error) {
      console.error('A problem occurred with your fetch operation: ', error);
    }
  }

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  function isTimeSlotAvailable(slot) {
    return availableTimeSlots.includes(slot);
  }

  function isTimeSlotAvailableupdate(slot) {
    return availableTimeSlots.includes(slot) || form.timeslot===slot;
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
    const person = { ...form };
    try {
      let response;
      if (isNew) {
        // if we are adding a new record we will POST to /record.
        response = await fetch("http://localhost:5050/hostevents", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(person),
        });
      } else {
        // if we are updating a record we will PATCH to /record/:id.
        response = await fetch(`http://localhost:5050/update/${params.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(person),
        });
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('A problem occurred with your fetch operation: ', error);
    } finally {
      setForm({ eventname: "", club: "", venue: "", date: "", timeslot: "" });
      navigate("/events");
    }
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div style={{ minHeight: "86vh" }}>
      <h3 className="text-lg font-semibold p-4">Add/Update Event</h3>
      <form
        onSubmit={onSubmit}
        className="border rounded-lg overflow-hidden p-4"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-slate-900/10 pb-12 md:grid-cols-2">
          <div>
            <h2 className="text-base font-semibold leading-7 text-slate-900">
              Event Info
            </h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Make Your Event Grand.
            </p>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 ">
            <div className="sm:col-span-4">
              <label
                htmlFor="eventname"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                Event Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="eventname"
                    id="eventname"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter Event Name"
                    value={form.eventname}
                    onChange={(e) => updateForm({ eventname: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="club"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                Club
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="club"
                    id="club"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Organising Club"
                    value={form.club}
                    onChange={(e) => updateForm({ club: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="date"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                Date
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"

                    value={form.date}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                      updateForm({ date: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>
            <div>
              <fieldset className="mt-4">
                <label
                  htmlFor="venue"
                  className="mb-2 block text-sm font-medium leading-6 text-slate-900"
                >
                  Venue
                </label>
                <legend className="sr-only">Venue</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                  <div className="flex items-center">
                    <input
                      id="positionIntern"
                      name="positionOptions"
                      type="radio"
                      value="G-Series"
                      className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-600 cursor-pointer"
                      checked={form.venue === "G-Series"}
                      onChange={(e) => {
                        setSelectedVenue(e.target.value);
                        updateForm({ venue: e.target.value });
                        setShowInput(false);
                      }}
                    />
                    <label
                      htmlFor="positionIntern"
                      className="ml-3 block text-sm font-medium leading-6 text-slate-900 mr-4"
                    >
                      G-Series
                    </label>
                    <input
                      id="positionJunior"
                      name="positionOptions"
                      type="radio"
                      value="Seminar Hall"
                      className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-600 cursor-pointer"
                      checked={form.venue === "Seminar Hall"}
                      onChange={(e) => {
                        setSelectedVenue(e.target.value);
                        updateForm({ venue: e.target.value });
                        setShowInput(false);
                      }}
                    />
                    <label
                      htmlFor="positionJunior"
                      className="ml-3 block text-sm font-medium leading-6 text-slate-900 mr-4"
                    >
                      Seminar Hall
                    </label>
                    <input
                      id="positionSenior"
                      name="positionOptions"
                      type="radio"
                      value="Other"
                      className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-600 cursor-pointer"
                      onChange={(e) => {
                        setSelectedVenue(e.target.value);
                        updateForm({ venue: e.target.value });
                        setShowInput(e.target.checked);
                      }}
                    />
                    <label
                      htmlFor="positionSenior"
                      className="ml-3 block text-sm font-medium leading-6 text-slate-900 mr-4"
                    >
                      Other
                    </label>
                    {showInput && (
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="text"
                          name="other"
                          id="other"
                          placeholder="Enter Your Venue"
                          value={form.other}
                          onChange={(e) => {
                            setSelectedVenue(e.target.value);
                            updateForm({ venue: e.target.value })
                          }
                          }
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </fieldset>
            </div>

            <div className="sm:col-span-4">

              <label htmlFor="timeslot"
                className="block text-sm font-medium leading-6 text-slate-900">Available Time Slots:</label>
              {update===true ? <div className="mt-2">
                <button onClick={(e) => {
                  e.preventDefault();
                  updateForm({ timeslot: "10 AM - 12 PM" });
                }}
                  className={`text-white ${isTimeSlotAvailableupdate("10 AM - 12 PM") ? "bg-blue-400" : "bg-green-700"} ${isTimeSlotAvailableupdate("10 AM - 12 PM") ? "cursor-not-allowed" : ""} font-bold m-2 py-2 px-4 border border-blue-700 rounded focus:bg-blue-700`} disabled={isTimeSlotAvailableupdate("10 AM - 12 PM")}
                >
                  10 AM - 12 PM
                </button>

                <button onClick={(e) => {
                  e.preventDefault();
                  updateForm({ timeslot: "12:30 PM - 1:30 PM" });
                }}
                  className={`text-white ${isTimeSlotAvailableupdate("12:30 PM - 1:30 PM") ? "bg-blue-400" : "bg-green-700"} ${isTimeSlotAvailableupdate("12:30 PM - 1:30 PM") ? "cursor-not-allowed" : ""} font-bold m-2 py-2 px-4 border border-blue-700 rounded focus:bg-blue-700`} disabled={isTimeSlotAvailableupdate("12:30 PM - 1:30 PM")}>
                  12:30 PM - 1:30 PM
                </button>

                <button onClick={(e) => {
                  e.preventDefault();
                  updateForm({ timeslot: "2 PM -  4 PM" });
                }}
                  className={`text-white ${isTimeSlotAvailableupdate("2 PM -  4 PM") ? "bg-blue-400" : "bg-green-700"} ${isTimeSlotAvailableupdate("2 PM -  4 PM") ? "cursor-not-allowed" : ""} font-bold m-2 py-2 px-4 border border-blue-700 rounded focus:bg-blue-700`} disabled={isTimeSlotAvailableupdate("2 PM -  4 PM")}>
                  2 PM -  4 PM
                </button>

                <button onClick={(e) => {
                  e.preventDefault();
                  updateForm({ timeslot: "4 PM - 6 PM" });
                }}
                  className={`text-white ${isTimeSlotAvailableupdate("4 PM - 6 PM") ? "bg-blue-400" : "bg-green-700"} ${isTimeSlotAvailableupdate("4 PM - 6 PM") ? "cursor-not-allowed" : ""} font-bold m-2 py-2 px-4 border border-blue-700 rounded focus:bg-blue-700`} disabled={isTimeSlotAvailableupdate("4 PM - 6 PM")}>
                  4 PM - 6 PM
                </button>
              </div> : <div className="mt-2">
                <button onClick={(e) => {
                  e.preventDefault();
                  updateForm({ timeslot: "10 AM - 12 PM" });
                }}
                  className={`text-white ${!isTimeSlotAvailable("10 AM - 12 PM") ? "bg-blue-400" : "bg-green-700"} ${!isTimeSlotAvailable("10 AM - 12 PM") ? "cursor-not-allowed" : ""} font-bold m-2 py-2 px-4 border border-blue-700 rounded focus:bg-blue-700`} disabled={!isTimeSlotAvailable("10 AM - 12 PM")}
                >
                  10 AM - 12 PM
                </button>

                <button onClick={(e) => {
                  e.preventDefault();
                  updateForm({ timeslot: "12:30 PM - 1:30 PM" });
                }}
                  className={`text-white ${!isTimeSlotAvailable("12:30 PM - 1:30 PM") ? "bg-blue-400" : "bg-green-700"} ${!isTimeSlotAvailable("12:30 PM - 1:30 PM") ? "cursor-not-allowed" : ""} font-bold m-2 py-2 px-4 border border-blue-700 rounded focus:bg-blue-700`} disabled={!isTimeSlotAvailable("12:30 PM - 1:30 PM")}>
                  12:30 PM - 1:30 PM
                </button>

                <button onClick={(e) => {
                  e.preventDefault();
                  updateForm({ timeslot: "2 PM -  4 PM" });
                }}
                  className={`text-white ${!isTimeSlotAvailable("2 PM -  4 PM") ? "bg-blue-400" : "bg-green-700"} ${!isTimeSlotAvailable("2 PM -  4 PM") ? "cursor-not-allowed" : ""} font-bold m-2 py-2 px-4 border border-blue-700 rounded focus:bg-blue-700`} disabled={!isTimeSlotAvailable("2 PM -  4 PM")}>
                  2 PM -  4 PM
                </button>

                <button onClick={(e) => {
                  e.preventDefault();
                  updateForm({ timeslot: "4 PM - 6 PM" });
                }}
                  className={`text-white ${!isTimeSlotAvailable("4 PM - 6 PM") ? "bg-blue-400" : "bg-green-700"} ${!isTimeSlotAvailable("4 PM - 6 PM") ? "cursor-not-allowed" : ""} font-bold m-2 py-2 px-4 border border-blue-700 rounded focus:bg-blue-700`} disabled={!isTimeSlotAvailable("4 PM - 6 PM")}>
                  4 PM - 6 PM
                </button>
              </div>}
            </div>

          </div>
        </div>
        <input
          type="submit"
          value={update?"Update Event":"Host Event"}
          className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3 cursor-pointer mt-4"
        />
      </form>
    </div>
  );
}