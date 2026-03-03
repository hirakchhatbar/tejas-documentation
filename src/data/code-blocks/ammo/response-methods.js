const ammoThrow = `target.register("/users/:id", (ammo) => {
  const user = findUser(ammo.payload.id);

  // No arguments: 500 Internal Server Error
  if (!user) return ammo.throw();

  // Status code with custom message
  if (!user.isActive) return ammo.throw(403, "Account disabled");

  // From Error object (Tejas converts to HTTP response)
  try {
    validate(user);
  } catch (err) {
    return ammo.throw(err);
  }

  ammo.fire(user);
})`

const ammoRedirect = `target.register("/old-page", (ammo) => {
  // Temporary redirect (302) - default
  ammo.redirect("/new-location");
})

target.register("/legacy", (ammo) => {
  // Permanent redirect (301)
  ammo.redirect("/v2/legacy", 301);
})

target.register("/external", (ammo) => {
  // Redirect to external URL
  ammo.redirect("https://example.com");
})`

const ammoDefaultEntry = `import { Target } from "te.js";

const target = new Target();

// Serve default HTML at /
target.register("/", (ammo) => {
  ammo.defaultEntry();
})`

export { ammoThrow, ammoRedirect, ammoDefaultEntry }
