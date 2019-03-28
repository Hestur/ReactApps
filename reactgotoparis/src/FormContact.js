import React from "react";

class FormContact extends React.Component {
  render() {
    return (
      <div id="form_container" className="form">
        <form
          id="form_48104"
          className="appnitro"
          method="post"
          action="/formbuilder/view.php"
        >
          <div className="form_description">
            <h2>Got questions?</h2>
            <p>Send us a message</p>
          </div>
          <ul>
            <li id="li_3">
              <label className="description" htmlFor="element_3">
                Name{" "}
              </label>
              <span>
                <input
                  id="element_3_1"
                  name="element_3_1"
                  className="element text"
                  maxLength={255}
                  size={8}
                  defaultValue
                />
              </span>
            </li>
            <li id="li_4">
              <label className="description" htmlFor="element_4">
                Message{" "}
              </label>
              <div>
                <textarea
                  id="element_4"
                  name="element_4"
                  className="element textarea medium"
                  defaultValue={""}
                />
              </div>
            </li>
            <li id="li_1">
              <label className="description" htmlFor="element_1">
                Email{" "}
              </label>
              <div>
                <input
                  id="element_1"
                  name="element_1"
                  className="element text medium"
                  type="text"
                  maxLength={255}
                  defaultValue
                />
              </div>
            </li>
            <li id="li_6">
              <label className="description" htmlFor="element_6">
                Phone number{" "}
              </label>
              <div>
                <input
                  id="element_6"
                  name="element_6"
                  className="element text small"
                  type="text"
                  maxLength={255}
                  defaultValue
                />
              </div>
            </li>
            <li className="buttons">
              <input type="hidden" name="form_id" defaultValue={48104} />
              <input
                id="saveForm"
                className="button_text"
                type="submit"
                name="submit"
                defaultValue="Submit"
              />
            </li>
          </ul>
        </form>
        <div className="infofoot">
          <p>Phone number:66666666</p>
          <p>Adress: Paris de street</p>
          <p>Open hours: mon-sun 24/7</p>
          <p>Open Phone hours: mon-sun 5:30-24:00</p>
        </div>
      </div>
    );
  }
}

export default FormContact;
