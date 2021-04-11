import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { backButton, contacts, inviteBlue } from "../assets/images";
import { api } from "../config/api";
import ContactList from "./Atoms/ContactList";

function Contact() {
  const history = useHistory();
  const userId = localStorage.getItem("userID");
  const userToken = localStorage.getItem("token");
  const [contactlist, setContactlist] = useState(null);

  const addChatrooms = (user, friend_id, friend_name) => {
    axios
      .post(
        `${api.baseUrl}/chatrooms/${user}`,
        { user2: friend_id },
        {
          headers: {
            "user-token": `${userToken}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          history.push(
            "/chat/" +
              friend_name.toLowerCase().split(" ").join("-") +
              "-" +
              res.data.data.id
          );
        }
      })
      .catch((err) => {
        Swal.fire({
          position: "top-start",
          icon: "error",
          title: `${err.response.data.message}`,
          showConfirmButton: false,
          toast: true,
          timer: 1500,
        });
      });
  };

  useEffect(() => {
    axios
      .get(`${api.baseUrl}/contacts/${userId}`, {
        headers: {
          "user-token": `${userToken}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setContactlist(res.data.data.friend_list);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <>
      {/* Contacts */}
      {contactlist && (
        <section className="call-history">
          <div className="row mx-3 px-3 mt-42">
            <div onClick={() => history.push("/chat")} className="col-2">
              <img className="back icon" src={backButton} alt="back-menu" />
            </div>
            <div className="col-8 text-center">
              <p className="text-blue title">Contacts</p>
            </div>
            <div className="col-2 text-center">
              <img className="icon" src={inviteBlue} />
            </div>
          </div>
          <div className="row mx-3 px-3 mt-3 scroolbar-none overflow-auto">
            {contactlist &&
              contactlist.map((e) => {
                return (
                  <ContactList
                    data={e}
                    key={e.friend_id}
                    addChatroom={addChatrooms}
                  />
                );
              })}
          </div>
        </section>
      )}

      {/* End Contacts */}
    </>
  );
}

export default Contact;
