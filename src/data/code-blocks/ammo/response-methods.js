const ammoThrow = `target.register("/users/:id", (ammo) => {
  const user = findUser(ammo.payload.id);

  // No arguments: LLM infers from code context when errors.llm.enabled (no error object required)
  if (!user) return ammo.throw();

  // Explicit: status code and message (always override)
  if (!user.isActive) return ammo.throw(403, "Account disabled");

  // Optional: pass caught error; LLM uses error stack for code context
  try {
    validate(user);
  } catch (err) {
    return ammo.throw(err);
  }

  // Per-call options: skip LLM or override message type
  // ammo.throw({ useLlm: false });
  // ammo.throw({ messageType: 'developer' });

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
