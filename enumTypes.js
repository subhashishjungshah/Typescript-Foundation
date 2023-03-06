// enums are group of constants that can assign number to string and make comparision easy
// enum Role{values}
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Developer"] = 2] = "Developer";
})(Role || (Role = {}));
console.log(Role.Manager);
