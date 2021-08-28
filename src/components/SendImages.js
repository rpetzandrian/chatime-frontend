import React, { useEffect, useState } from "react";
import { SendImageHeader, SendList } from "./Atoms";
import { useDispatch, useSelector } from "react-redux";
import { addMessages, getMessages } from "../redux/actions/messages";
import { plusFile } from "../assets/images";
import { useParams } from "react-router";

function SendImages({ update, type }) {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { data: auth } = useSelector((s) => s.Auth);
  const { data: message } = useSelector((s) => s.Messages);
  const chatroom_id = slug ? slug.split("-")[slug.split("-").length - 1] : null;
  const formData = new FormData();
  const [form, setForm] = useState({
    chatroom_id: message.chatroom_id,
    sender: auth.id,
    text: "",
    images: null,
    imagePrev: [],
  });

  useEffect(() => {
    if (form.images) {
      const fileArray = Array.from(form.images).map((e) =>
        URL.createObjectURL(e)
      );

      setForm({
        ...form,
        imagePrev: fileArray,
      });
    }
  }, [form.images]);

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
    if (form.images) {
      formDataAppend();
      dispatch(addMessages(auth.id, auth.token, formData, "images", reset));
      dispatch(getMessages(auth.id, auth.token, chatroom_id));
      update();
      type("");
    } else {
      type("");
    }
  };

  return (
    <>
      <section className="send-image">
        <div className="w-100 row justify-content-between align-items-center pt-1 mx-3 sticky-top send">
          <SendImageHeader send={(e) => addNewMessage(e)} />
        </div>
        <form
          onSubmit={(e) => addNewMessage(e)}
          className="d-flex w-100 h-75 ms-4 me-5 form-send-message"
        >
          <input
            onChange={(e) => {
              e.preventDefault();
              setForm({ ...form, text: e.target.value });
            }}
            type="text"
            name="text"
            className="form-control w-100 px-4 mt-2 ms-3 me-5 input-message"
            placeholder="Type your message..."
            aria-label="Type your message..."
            value={form.text}
          />
        </form>

        {!form.images && (
          <form
            encType="multipart/form-data"
            className="row row-cols-auto w-100 justify-content-center ms-5 ms-md-5 form-add"
          >
            <label className="justify-content-center ms-5 ps-5 mt-3">
              <img width="100px" className="ms-5 mt-2 icon" src={plusFile} />
              <input
                onChange={(e) => {
                  e.preventDefault();
                  setForm({ ...form, images: e.target.files });
                }}
                name="images"
                className="pt-3 w-100 ms-3 input-file invisible"
                type="file"
                files={form.images}
                multiple
              />
            </label>
          </form>
        )}
        {form.images && (
          <div className="row row-cols-auto w-100 justify-content-center mx-0 mx-md-3 image">
            {form.imagePrev &&
              form.imagePrev.map((e, index) => {
                return <SendList key={index} images={e} none={true} />;
              })}
          </div>
        )}
      </section>
    </>
  );
}

export default SendImages;
