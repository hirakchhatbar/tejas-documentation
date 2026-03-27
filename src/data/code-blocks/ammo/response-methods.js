const ammoThrow = `target.register("/users/:id", (ammo) => {
  const user = findUser(ammo.payload.id);

  // No arguments: LLM infers status + message from code context
  if (!user) return ammo.throw();

  // Explicit code preserved; LLM adds devInsight for Radar
  if (!user.isActive) return ammo.throw(403, "Account disabled");

  // Pass caught error: LLM infers from error + code context
  try {
    validate(user);
  } catch (err) {
    return ammo.throw(err);
  }

  // Opt out of LLM for a specific call
  // ammo.throw(502, 'Known issue', { useLlm: false });

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
