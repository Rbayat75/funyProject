export const schema1 = {
  schema: {
    empty: {
      type: "string",
      title: "Empty",
    },
    dropdown: {
      type: "string",
      title: "Dropdown",
      enum: ["Chose1", "Chose2"],
      default: "Select",
    },
    checkbox: {
      type: "boolean",
    },
  },
  form: [
    {
      key: "empty",
    },
    {
      key: "dropdown",
      onSelect: function (evt, node) {
        // هر زمان که select element رندر می‌شود، این کد اجرا می‌شود
        $(node.el).find("select").dropdown();
      },
    },
    {
      key: "checkbox",
      inlinetitle: "CheckBox",
      notitle: true,
    },
    {
      type: "button",
      title: "Submit",
      onClick: function (evt) {
        evt.preventDefault();
        var formData = $("#myform").serializeArray();
        var formDataObject = {};
        $.each(formData, function () {
          formDataObject[this.name] = this.value;
        });
        // alert(JSON.stringify(formDataObject, null, 2));
        console.log(formDataObject);
      },
    },
  ],
};

export const schema2 = {
  schema: {
    Integer: {
      type: "integer",
      title: "Integer",
      name: "integer",
      default: 101,
    },
    Email: {
      type: "email",
      title: "Email",
      name: "email",
      default: "jack",
    },
    Decimal: {
      type: "string",
      title: "Decimal",
      name: "decimal",
      default: "1.1.1",
    },
    Number: {
      type: "string",
      title: "Number",
      name: "number",
      default: "+200",
    },
    URL: {
      type: "string",
      title: "URL",
      name: "url",
      default: "ww.fakeurl.com",
    },
    RegEx: {
      type: "string",
      title: "RegEx",
      name: "regex",
      default: "joe",
    },
  },
  form: [
    {
      type: "fieldset",
      htmlClass: "ui two column grid",
      items: [
        {
          key: "Integer",
          htmlClass: "eight wide column",
        },
        {
          key: "Decimal",
          htmlClass: "eight wide column",
        },
        {
          key: "URL",
          htmlClass: "eight wide column",
        },
        {
          key: "Email",
          htmlClass: "eight wide column",
        },
        {
          key: "Number",
          htmlClass: "eight wide column",
        },
        {
          key: "RegEx",
          htmlClass: "eight wide column",
        },
      ],
    },
    {
      type: "button",
      title: "Submit",
      onClick: function (evt) {
        evt.preventDefault();
        var formData = $("#myform2").serializeArray();
        var formDataObject = {};
        $.each(formData, function () {
          formDataObject[this.name] = this.value;
        });
        console.log(formDataObject);
      },
    },
  ],
};
