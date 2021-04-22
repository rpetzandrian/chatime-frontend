import React, { useEffect, useState } from "react";
import { SendImageHeader, SendList } from "./Atoms";
import rectangle38 from "../assets/images/Rectangle 38.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { api } from "../config/api";
import { addMessages } from "../redux/actions/messages";

function SendImages({ update, type }) {
  const dispatch = useDispatch();
  const { data: auth } = useSelector((s) => s.Auth);
  const { data: message } = useSelector((s) => s.Messages);
  const formData = new FormData();
  const [form, setForm] = useState({
    chatroom_id: message.chatroom_id,
    sender: auth.id,
    text: "",
    images: [],
    imagePrev: [],
  });

  useEffect(() => {
    const fileArray = Array.from(form.images).map((e) =>
      URL.createObjectURL(e)
    );

    setForm({
      ...form,
      imagePrev: fileArray,
    });
  }, [form.images]);

  console.log(form.imagePrev, "ahaa");

  useEffect(() => {
    setForm({
      ...form,
      chatroom_id: message.chatroom_id,
    });
  }, [message.chatroom_id]);

  const formDataAppend = () => {
    formData.append("chatroom_id", form.chatroom_id);
    formData.append("sender", form.sender);
    formData.append("text", form.text);
    for (let i = 0; i < form.images.length; i++) {
      formData.append("images", form.images[i]);
    }
  };

  const reset = () => {
    formData.delete("images");
    formData.delete("sender");
    formData.delete("text");
    formData.delete("chatroom_id");

    setForm({
      chatroom_id: message.chatroom_id,
      sender: auth.id,
      text: "",
      images: [],
      imagePrev: [],
    });
  };

  const addNewMessage = (e) => {
    e.preventDefault();
    formDataAppend();
    dispatch(addMessages(auth.id, auth.token, formData, "images", reset));
    type("");
    update();
  };

  return (
    <>
      <section className="send-image">
        <div className="w-100 row justify-content-between align-items-center pt-1 mx-3 sticky-top send">
          <SendImageHeader send={(e) => addNewMessage(e)} />
        </div>
        <form
          onSubmit={(e) => addNewMessage(e)}
          className="d-flex h-75 mx-4 form-send-message"
          encType="multipart/form-data"
        >
          <input
            onChange={(e) => {
              e.preventDefault();
              setForm({ ...form, text: e.target.value });
            }}
            type="text"
            name="text"
            className="form-control w-75 px-4 mt2-3 input-message"
            placeholder="Type your message..."
            aria-label="Type your message..."
            value={form.text}
          />
          <input
            onChange={(e) => {
              e.preventDefault();
              setForm({ ...form, images: e.target.files });
            }}
            name="images"
            className="pt-3 w-25 ms-3 input-file"
            type="file"
            files={form.images}
            multiple
          />
        </form>
        <div className="row row-cols-auto w-100 justify-content-center mx-0 mx-md-3 image">
          {form.imagePrev &&
            form.imagePrev.map((e, index) => {
              return <SendList key={index} images={e} none={true} />;
            })}
        </div>
      </section>
    </>
  );
}

export default SendImages;
