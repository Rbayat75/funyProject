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
    part1: {
      type: "object",
      properties: {
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
      },
    },
    part2: {
      type: "object",
      properties: {
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
      },
    },
    part3: {
      type: "object",
      properties: {
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
    },
  },
  form: [
    {
      key: "part1",
    },
    {
      key: "part2",
    },
    {
      key: "part3",
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
        // alert(JSON.stringify(formDataObject, null, 2));
        console.log(formDataObject);
      },
    },
  ],
};
