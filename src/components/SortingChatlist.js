import React from "react";

function SortingChatlist() {
  return (
    <>
      {/* <!-- Sorting Chatlist --> */}
      <ul class="list-group list-group-horizontal justify-content-between me-1 me-md-4 mb-35 mt-3 mt-md-0 px-3 sorting-list overflow-auto">
        <li class="list-group-item me-3 sort-item">All</li>
        <li class="list-group-item me-3 sort-item active">Important</li>
        <li class="list-group-item me-3 sort-item">Unread</li>
        <li class="list-group-item me-3 sort-item">Read</li>
      </ul>
      {/* <!-- End Sorting Chatlist --> */}
    </>
  );
}

export default SortingChatlist;
