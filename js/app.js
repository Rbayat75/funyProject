import { schema1, schema2 } from "./schema.js";

$(document).ready(function () {
  $("#myform").jsonForm(schema1);
  $("#myform2").jsonForm(schema2);
});
