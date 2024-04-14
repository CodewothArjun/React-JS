function CurrentTime() {
  let time = new Date();
  function getCurrentTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const time = hours + ":" + minutes + ":" + seconds;
    return time;
  }
  function getCurrentDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const currentDate = mm + "/" + dd + "/" + yyyy;
    return currentDate;
  }

  return (
    <p>
      This the current time : {getCurrentDate()} - {getCurrentTime()}
      <br /><br /><br />
      Another Way:{time.toLocaleDateString()} - {time.toLocaleTimeString()}.
    </p>
  );
}

export default CurrentTime;
