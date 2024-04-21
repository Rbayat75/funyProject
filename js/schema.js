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
    },
  ],
};

export const schema2 = {
  schema: {
    fieldset1: {
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
        Decimal: {
          type: "string",
          title: "Decimal",
          name: "decimal",
          default: "1.1.1",
        },
      },
    },
    fieldset2: {
      type: "object",
      properties: {
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
    },
  },
  form: [
    {
      type: "fieldset",
      htmlClass: "ui two column grid",
      items: [
        {
          key: "fieldset1",
          htmlClass: "eight wide column",
        },
        {
          key: "fieldset2",
          htmlClass: "eight wide column",
        },
      ],
    },
    {
      type: "button",
      title: "Submit",
    },
  ],
};
