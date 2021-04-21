import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { Loading } from ".";
import { backButton, contacts, inviteBlue } from "../assets/images";
import {
  addContact,
  deleteContact,
  getContact,
} from "../redux/actions/contact";
import { addChatlist } from "../redux/actions/chatlist";
import ContactList from "./Atoms/ContactList";

function Contact() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { data: auth } = useSelector((s) => s.Auth);
  const { data: contact, error, loading } = useSelector((s) => s.Contact);
  const [formContact, setFormContact] = useState({
    phone: "",
    friend_name: "",
  });
  const [update, setUpdate] = useState(false);

  const changeFormContact = (e) => {
    setFormContact({
      ...formContact,
      [e.target.name]: e.target.value,
    });
  };

  const addNewContact = () => {
    dispatch(addContact(auth.id, auth.token, formContact));
    setUpdate(!update);
  };

  const addChatrooms = (friend_id, friend_name, cb) => {
    dispatch(addChatlist(auth.id, auth.token, friend_id, friend_name, cb));
    // axios
    //   .post(
    //     `${api.baseUrl}/chatrooms/${user}`,
    //     { user2: friend_id },
    //     {
    //       headers: {
    //         "user-token": `${userToken}`,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     if (res.status === 201) {
    //       history.push(
    //         "/chat/" +
    //           friend_name.toLowerCase().split(" ").join("-") +
    //           "-" +
    //           res.data.data.id
    //       );
    //     }
    //   })
    //   .catch((err) => {
    //     Swal.fire({
    //       position: "top-start",
    //       icon: "error",
    //       title: `${err.response.data.message}`,
    //       showConfirmButton: false,
    //       toast: true,
    //       timer: 1500,
    //     });
    //   });
  };

  const delContact = (friend_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2675ec",
      cancelButtonColor: "#ff0000",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteContact(auth.id, auth.token, friend_id));
        setUpdate(!update);
        // axios
        //   .delete(`${api.baseUrl}/contacts/${userId}/${friend_id}`, {
        //     headers: {
        //       "user-token": `${userToken}`,
        //     },
        //   })
        //   .then((res) => {
        //     if (res.status === 200) {
        //       Swal.fire("Deleted!", "Your file has been deleted.", "success");
        //     }
        //   })
        //   .catch((err) => {
        //     console.log(err.response);
        //   });
      }
    });
  };

  useEffect(() => {
    dispatch(getContact(auth.id, auth.token));
  }, [update]);

  return (
    <>
      {loading && <Loading />}

      {/* Contacts */}
      {contact && (
        <section className="call-history">
          <div className="row mx-3 px-3 mt-42">
            <div onClick={() => history.push("/chat")} className="col-2">
              <img className="back icon" src={backButton} alt="back-menu" />
            </div>
            <div className="col-8 text-center">
              <p className="text-blue title">Contacts</p>
            </div>
            <div
              className="col-2 text-center"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img className="icon" src={inviteBlue} />
            </div>
          </div>
          <div className="row mx-3 px-3 mt-3 scroolbar-none overflow-auto">
            {contact &&
              contact.map((e, index) => {
                return (
                  <ContactList
                    data={e}
                    key={index}
                    addChatroom={addChatrooms}
                    deleteContact={delContact}
                  />
                );
              })}
          </div>
        </section>
      )}

      {/* Modal Add Contact */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary">
              <h5 className="modal-title text-white" id="exampleModalLabel">
                Add Contact
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={() => addNewContact()}>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control form-custom text-secondary label-custom mb-1"
                    id="phone"
                    name="phone"
                    required
                    onChange={(e) => changeFormContact(e)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-custom"
                    id="exampleInputPassword1"
                    name="friend_name"
                    onChange={(e) => changeFormContact(e)}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-custom-secondary"
                onClick={() => addNewContact()}
                data-bs-dismiss="modal"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* End Contacts */}
    </>
  );
}

export default Contact;
