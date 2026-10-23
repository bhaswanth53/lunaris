/* Generated search index — do not edit by hand. */
window.LUNARIS_SEARCH_INDEX = [
  {
    "crumb": "Documentation",
    "title": "Introduction",
    "url": "docs/index.html",
    "text": "Lunaris is a minimal, plain-PHP web framework built from scratch — an action-based alternative to traditional MVC that keeps every line of your application within reach."
  },
  {
    "crumb": "Introduction",
    "title": "What is Lunaris?",
    "url": "docs/index.html#what-is-lunaris",
    "text": "Lunaris ditches the traditional MVC/controller layout in favour of an action-based approach: every route maps directly to an individual action class which is responsible for receiving the request, pas"
  },
  {
    "crumb": "Introduction",
    "title": "Philosophy: full control over your codebase",
    "url": "docs/index.html#philosophy-full-control-over-your-codebase",
    "text": "Lunaris is built around a simple idea — the developer should have full control . That means:"
  },
  {
    "crumb": "Introduction",
    "title": "Requirements",
    "url": "docs/index.html#requirements",
    "text": "Requirement Details PHP 8.3+ The code uses enums, match expressions and anonymous classes; enforced by \"php\": \">=8.3\" in composer.json . Composer Autoloading ( System\\ → system/ , App\\ → app/ ) and de"
  },
  {
    "crumb": "Introduction",
    "title": "The framework at a glance",
    "url": "docs/index.html#the-framework-at-a-glance",
    "text": "Concern Where it lives HTTP routes routes/web.php Actions (no controllers) app/Actions/ Custom middlewares app/Middlewares/ Configuration config/vars.php + .env Views views/ — plain PHP Sessions & fla"
  },
  {
    "crumb": "Introduction",
    "title": "Where to go next",
    "url": "docs/index.html#where-to-go-next",
    "text": "Page You’ll learn Installation Create a project with Composer, set up .env , generate your app key, run with Docker. Architecture The directory structure and the full request lifecycle. Routing Map UR"
  },
  {
    "crumb": "Documentation",
    "title": "Installation",
    "url": "docs/installation.html",
    "text": "Get a fresh Lunaris application running locally in a few commands — with Composer, a required .env file and your application encryption key."
  },
  {
    "crumb": "Installation",
    "title": "Requirements",
    "url": "docs/installation.html#requirements",
    "text": "PHP 8.3+ — the codebase relies on enums, match expressions and anonymous classes."
  },
  {
    "crumb": "Installation",
    "title": "Create a new project",
    "url": "docs/installation.html#create-a-new-project",
    "text": "lunaris/lunaris is published as a Composer project , so the fastest way to start is create-project — it fetches the framework and installs its dependencies in one command:"
  },
  {
    "crumb": "Installation",
    "title": "Install from source",
    "url": "docs/installation.html#install-from-source",
    "text": "To track the repository itself, clone it from Codeberg and install its dependencies:"
  },
  {
    "crumb": "Installation",
    "title": "Create your .env",
    "url": "docs/installation.html#create-your-env",
    "text": "Copy the shipped .env.example to .env . It is loaded at boot with vlucas/phpdotenv (immutable mode) and is required — the application will not boot without it. Keys are read through the env() helper."
  },
  {
    "crumb": "Installation",
    "title": "Generate the application key",
    "url": "docs/installation.html#generate-the-application-key",
    "text": "The key:generate command creates a new Defuse ASCII-safe key and writes (or replaces) APP_KEY= in your .env :"
  },
  {
    "crumb": "Installation",
    "title": "Web server setup",
    "url": "docs/installation.html#web-server-setup",
    "text": "The document root must point at the public/ directory — never at the project root. public/index.php is the front controller, and public/.htaccess rewrites every request that is not a real file to it."
  },
  {
    "crumb": "Installation",
    "title": "Using Docker / Podman",
    "url": "docs/installation.html#using-docker-podman",
    "text": "The docker/ directory provides a complete environment:"
  },
  {
    "crumb": "Installation",
    "title": "Verify the install",
    "url": "docs/installation.html#verify-the-install",
    "text": "With the server running, open http://localhost:8080 . The GET / route points at the sample HelloWorld action, which renders the welcome view:"
  },
  {
    "crumb": "Documentation",
    "title": "Architecture",
    "url": "docs/architecture.html",
    "text": "Lunaris has no hidden runtime. This page walks through the project layout and follows a single request through every layer of the framework."
  },
  {
    "crumb": "Architecture",
    "title": "Directory structure",
    "url": "docs/architecture.html#directory-structure",
    "text": "Folder Purpose app/ Application code — one class per route in Actions/ , plus your own Middlewares/ . config/ vars.php , the config array read by config() . public/ Web root: front controller, rewrite"
  },
  {
    "crumb": "Architecture",
    "title": "Request lifecycle",
    "url": "docs/architecture.html#request-lifecycle",
    "text": "A request flows through the system like this:"
  },
  {
    "crumb": "Architecture",
    "title": "The front controller",
    "url": "docs/architecture.html#the-front-controller",
    "text": "public/index.php does the boring-but-important setup before the framework ever runs:"
  },
  {
    "crumb": "Architecture",
    "title": "The console lifecycle",
    "url": "docs/architecture.html#the-console-lifecycle",
    "text": "The lunar script runs configureConsole() instead — the same boot sequence but it stops before loading routes, so commands never dispatch HTTP. env() , config() and Log::* are all available inside comm"
  },
  {
    "crumb": "Architecture",
    "title": "Error handling",
    "url": "docs/architecture.html#error-handling",
    "text": "Any Throwable thrown during load or dispatch is caught once in Container::loadRoutes() and passed to Route::handle($e) , which maps it to an HTTP status (404 / 403 / 500) and renders a configured erro"
  },
  {
    "crumb": "Documentation",
    "title": "Configuration",
    "url": "docs/configuration.html",
    "text": "Lunaris keeps configuration in two places: a .env file for secrets and environment values, and a single PHP array in config/vars.php for everything else."
  },
  {
    "crumb": "Configuration",
    "title": "The .env file",
    "url": "docs/configuration.html#the-env-file",
    "text": "Environment variables are loaded at boot with vlucas/phpdotenv in immutable mode. Keys are read through the env() helper — never through $_ENV or getenv() directly."
  },
  {
    "crumb": "Configuration",
    "title": "config/vars.php",
    "url": "docs/configuration.html#configvarsphp",
    "text": "The central configuration file returns an array. Values may be closures , which are evaluated lazily when read — this is how config values wrap env() calls without paying for them on every request."
  },
  {
    "crumb": "Configuration",
    "title": "Reading configuration",
    "url": "docs/configuration.html#reading-configuration",
    "text": "Config values are read with dot notation through the config() helper:"
  },
  {
    "crumb": "Configuration",
    "title": "The env() helper",
    "url": "docs/configuration.html#the-env-helper",
    "text": "Add your own keys Drop a new entry into config/vars.php — keep wrapping env() in a closure so the value stays lazy: \"stripe\" => [\"key\" => fn() => env(\"STRIPE_KEY\")], then read it with config(\"stripe.k"
  },
  {
    "crumb": "Configuration",
    "title": "Global helpers",
    "url": "docs/configuration.html#global-helpers",
    "text": "All helpers live in system/funcs.php and are autoloaded globally:"
  },
  {
    "crumb": "Configuration",
    "title": "Helper examples",
    "url": "docs/configuration.html#helper-examples",
    "text": "Security note server() only trusts the host if it matches a hostname regex, and only honours X-Forwarded-Proto when it is literally http or https . Don’t build origin URLs from raw headers yourself."
  },
  {
    "crumb": "Documentation",
    "title": "Routing",
    "url": "docs/routing.html",
    "text": "All HTTP routes are defined in a single file — routes/web.php . Each route maps one URI pattern to one action class."
  },
  {
    "crumb": "Routing",
    "title": "Defining routes",
    "url": "docs/routing.html#defining-routes",
    "text": "Supported verbs Each verb is a static factory over a shared Route::add($method, $uri, $handler) registration."
  },
  {
    "crumb": "Routing",
    "title": "Supported verbs",
    "url": "docs/routing.html#supported-verbs",
    "text": "Each verb is a static factory over a shared Route::add($method, $uri, $handler) registration."
  },
  {
    "crumb": "Routing",
    "title": "Rules & behavior",
    "url": "docs/routing.html#rules-behavior",
    "text": "The $action must be the fully-qualified class name of an action class."
  },
  {
    "crumb": "Routing",
    "title": "Route parameters",
    "url": "docs/routing.html#route-parameters",
    "text": "Placeholders in the URI become an array passed to main($params) :"
  },
  {
    "crumb": "Routing",
    "title": "Named routes",
    "url": "docs/routing.html#named-routes",
    "text": "Give a route a name, then generate URLs from it instead of hard-coding paths:"
  },
  {
    "crumb": "Routing",
    "title": "Current route helpers",
    "url": "docs/routing.html#current-route-helpers",
    "text": "Redirects and status codes Redirecting between named routes is a common pattern in actions:"
  },
  {
    "crumb": "Routing",
    "title": "Redirects and status codes",
    "url": "docs/routing.html#redirects-and-status-codes",
    "text": "Redirecting between named routes is a common pattern in actions:"
  },
  {
    "crumb": "Routing",
    "title": "How dispatch works",
    "url": "docs/routing.html#how-dispatch-works",
    "text": "Route is a final class holding static state (routes, named routes, current route). That’s a non-issue under standard Apache/PHP-FPM per-request processes."
  },
  {
    "crumb": "Documentation",
    "title": "Actions & Responses",
    "url": "docs/actions.html",
    "text": "There are no controllers. Every route points to one action — a class extending SystemHttpAction with a two-method contract."
  },
  {
    "crumb": "Actions & Responses",
    "title": "The action contract",
    "url": "docs/actions.html#the-action-contract",
    "text": "Method Required Purpose main() yes Called on every successful request, after all middlewares pass. Receives the route params. Return value is echoed. middlewares() yes Returns an array of middleware c"
  },
  {
    "crumb": "Actions & Responses",
    "title": "Reading the request",
    "url": "docs/actions.html#reading-the-request",
    "text": "The Action base class captures the incoming request so you can read input directly:"
  },
  {
    "crumb": "Actions & Responses",
    "title": "The Str value object",
    "url": "docs/actions.html#the-str-value-object",
    "text": "Action::data($key) returns a System\\Support\\Str object with chainable methods:"
  },
  {
    "crumb": "Actions & Responses",
    "title": "Responses",
    "url": "docs/actions.html#responses",
    "text": "Build responses with the response() helper (a System\\Http\\Response instance). Responses are fluent and, for data responses, send (echo) immediately."
  },
  {
    "crumb": "Actions & Responses",
    "title": "JSON",
    "url": "docs/actions.html#json",
    "text": "Text & HTML Views response()->view() returns a view renderer — call render() to produce the output:"
  },
  {
    "crumb": "Actions & Responses",
    "title": "Text & HTML",
    "url": "docs/actions.html#text-html",
    "text": "Views response()->view() returns a view renderer — call render() to produce the output:"
  },
  {
    "crumb": "Actions & Responses",
    "title": "Views",
    "url": "docs/actions.html#views",
    "text": "response()->view() returns a view renderer — call render() to produce the output:"
  },
  {
    "crumb": "Actions & Responses",
    "title": "Redirects",
    "url": "docs/actions.html#redirects",
    "text": "Status & headers send() calls http_response_code() , sets each registered header and echoes the body. json/text/html all send automatically."
  },
  {
    "crumb": "Actions & Responses",
    "title": "Status & headers",
    "url": "docs/actions.html#status-headers",
    "text": "send() calls http_response_code() , sets each registered header and echoes the body. json/text/html all send automatically."
  },
  {
    "crumb": "Documentation",
    "title": "Middlewares & Security",
    "url": "docs/middlewares.html",
    "text": "Middlewares guard routes before main() runs. They execute in the order returned by middlewares() , using an onion-style pipeline — and Lunaris ships the security primitives you need alongside them."
  },
  {
    "crumb": "Middlewares & Security",
    "title": "The interface",
    "url": "docs/middlewares.html#the-interface",
    "text": "Every middleware implements one method:"
  },
  {
    "crumb": "Middlewares & Security",
    "title": "A complete middleware",
    "url": "docs/middlewares.html#a-complete-middleware",
    "text": "$request is the action instance itself , so you can inspect input, headers, $_FILES , etc."
  },
  {
    "crumb": "Middlewares & Security",
    "title": "Applying middlewares to an action",
    "url": "docs/middlewares.html#applying-middlewares-to-an-action",
    "text": "How the pipeline works System\\Routing\\MiddlewarePipeline composes the onion using array_reduce on the reversed middleware list, wrapping the destination closure (which calls main() ):"
  },
  {
    "crumb": "Middlewares & Security",
    "title": "How the pipeline works",
    "url": "docs/middlewares.html#how-the-pipeline-works",
    "text": "System\\Routing\\MiddlewarePipeline composes the onion using array_reduce on the reversed middleware list, wrapping the destination closure (which calls main() ):"
  },
  {
    "crumb": "Middlewares & Security",
    "title": "Built-in middleware: CsrfMiddleware",
    "url": "docs/middlewares.html#built-in-middleware-csrfmiddleware",
    "text": "System\\Http\\Middlewares\\CsrfMiddleware protects state-changing requests. On POST / PUT / PATCH / DELETE it validates a CSRF token sent either as $_POST['_token'] or the X-CSRF-TOKEN header, throwing F"
  },
  {
    "crumb": "Middlewares & Security",
    "title": "Hashing passwords",
    "url": "docs/middlewares.html#hashing-passwords",
    "text": "System\\Security\\Hash wraps PHP’s password_* functions (bcrypt via PASSWORD_DEFAULT ):"
  },
  {
    "crumb": "Middlewares & Security",
    "title": "Encryption",
    "url": "docs/middlewares.html#encryption",
    "text": "System\\Security\\Crypt provides authenticated symmetric encryption via defuse/php-encryption (AES-256-GCM), keyed by the APP_KEY in your config:"
  },
  {
    "crumb": "Middlewares & Security",
    "title": "CSRF tokens",
    "url": "docs/middlewares.html#csrf-tokens",
    "text": "Session-backed tokens validated with hash_equals (constant-time comparison):"
  },
  {
    "crumb": "Middlewares & Security",
    "title": "Hardening baked into the framework",
    "url": "docs/middlewares.html#hardening-baked-into-the-framework",
    "text": "Protection Where Session cookie hardening httponly , samesite=Lax , secure on HTTPS — set before session_start() in public/index.php . Server file protection Root .htaccess denies web access to .env a"
  },
  {
    "crumb": "Documentation",
    "title": "Views & Templates",
    "url": "docs/views.html",
    "text": "Views are plain PHP files under views/ . There is no template-compilation step — rendering uses output buffering and include inside a scoped closure."
  },
  {
    "crumb": "Views & Templates",
    "title": "The $template facade",
    "url": "docs/views.html#the-template-facade",
    "text": "Every view gets a $template variable — a View facade exposing:"
  },
  {
    "crumb": "Views & Templates",
    "title": "Layouts & sections",
    "url": "docs/views.html#layouts-sections",
    "text": "views/layouts/app.php :"
  },
  {
    "crumb": "Views & Templates",
    "title": "Partial includes",
    "url": "docs/views.html#partial-includes",
    "text": "views/partials/nav.php is included from another view with:"
  },
  {
    "crumb": "Views & Templates",
    "title": "Primitives",
    "url": "docs/views.html#primitives",
    "text": "Small inline partials live in views/primitives/ . views/primitives/button.php :"
  },
  {
    "crumb": "Views & Templates",
    "title": "Components with slots",
    "url": "docs/views.html#components-with-slots",
    "text": "views/components/card.php :"
  },
  {
    "crumb": "Views & Templates",
    "title": "Path resolution",
    "url": "docs/views.html#path-resolution",
    "text": "Call Resolved path response()->view(\"welcome\") views/welcome.php $template->includes(\"partials/nav\") views/partials/nav.php $template->primitive(\"forms.button\") views/primitives/forms/button.php $temp"
  },
  {
    "crumb": "Views & Templates",
    "title": "View statuses",
    "url": "docs/views.html#view-statuses",
    "text": "Render an error view with the right HTTP status by calling status() on the renderer:"
  },
  {
    "crumb": "Documentation",
    "title": "Validation & Sessions",
    "url": "docs/validation.html",
    "text": "The Validateable trait adds a fluent validation DSL to any action, while native PHP sessions are wrapped in small static facades for storage and flash messages."
  },
  {
    "crumb": "Validation & Sessions",
    "title": "Validation",
    "url": "docs/validation.html#validation",
    "text": "Use vfield($key, $value) and chain rules; each rule registers a first-wins error message."
  },
  {
    "crumb": "Validation & Sessions",
    "title": "Available rules",
    "url": "docs/validation.html#available-rules",
    "text": "Rule Example Description file() ->file() Value must be a valid upload ( isfile() : UPLOAD_ERR_OK + is_uploaded_file ). mimes([...]) ->mimes([\"image/png\", \"image/jpeg\"]) File MIME must be in the list ("
  },
  {
    "crumb": "Validation & Sessions",
    "title": "Trait methods",
    "url": "docs/validation.html#trait-methods",
    "text": "Method Description error($key, $message) Register an error (first-wins per key). validated() Runs an optional validate() method if defined, then returns empty($errors) . errors() Returns the error map"
  },
  {
    "crumb": "Validation & Sessions",
    "title": "Sessions",
    "url": "docs/validation.html#sessions",
    "text": "Sessions use native PHP sessions, started in public/index.php with hardened cookie parameters ( httponly on, samesite=Lax , and secure when the request is HTTPS) before session_start() ."
  },
  {
    "crumb": "Validation & Sessions",
    "title": "Flash messages",
    "url": "docs/validation.html#flash-messages",
    "text": "Flash messages are JSON-encoded into the session and consumed on read:"
  },
  {
    "crumb": "Validation & Sessions",
    "title": "Raw flashes",
    "url": "docs/validation.html#raw-flashes",
    "text": "Flash in a redirect cycle"
  },
  {
    "crumb": "Validation & Sessions",
    "title": "Flash in a redirect cycle",
    "url": "docs/validation.html#flash-in-a-redirect-cycle",
    "text": ""
  },
  {
    "crumb": "Documentation",
    "title": "Logging & Errors",
    "url": "docs/logging.html",
    "text": "The logging system uses a pluggable driver registry behind a static facade — while exceptions map to HTTP statuses and your own error views."
  },
  {
    "crumb": "Logging & Errors",
    "title": "Writing logs",
    "url": "docs/logging.html#writing-logs",
    "text": "System\\Logs\\Log is a static facade; a file driver is registered as \"file\" at boot and set as the default."
  },
  {
    "crumb": "Logging & Errors",
    "title": "Levels",
    "url": "docs/logging.html#levels",
    "text": "ERROR , WARNING , INFO , DEBUG — defined in the System\\Logs\\LogLevel enum."
  },
  {
    "crumb": "Logging & Errors",
    "title": "Context",
    "url": "docs/logging.html#context",
    "text": "Pass context arrays — scalar values are interpolated into {key} placeholders and the remainder is appended as JSON:"
  },
  {
    "crumb": "Logging & Errors",
    "title": "Channels",
    "url": "docs/logging.html#channels",
    "text": "Per-driver channels via __callStatic (the driver name becomes the method):"
  },
  {
    "crumb": "Logging & Errors",
    "title": "Custom drivers",
    "url": "docs/logging.html#custom-drivers",
    "text": "Implement System\\Logs\\LogDriver and register it:"
  },
  {
    "crumb": "Logging & Errors",
    "title": "Exceptions",
    "url": "docs/logging.html#exceptions",
    "text": "The exception hierarchy is deliberately tiny:"
  },
  {
    "crumb": "Logging & Errors",
    "title": "Throwing helpers",
    "url": "docs/logging.html#throwing-helpers",
    "text": "Custom error pages Configure views for each status in config/vars.php (or via environment):"
  },
  {
    "crumb": "Logging & Errors",
    "title": "Custom error pages",
    "url": "docs/logging.html#custom-error-pages",
    "text": "Configure views for each status in config/vars.php (or via environment):"
  },
  {
    "crumb": "Documentation",
    "title": "Console (CLI)",
    "url": "docs/cli.html",
    "text": "The lunar script is the framework’s console. It bootstraps .env , config and the log driver before running a command — so helpers are available inside your commands."
  },
  {
    "crumb": "Console (CLI)",
    "title": "Running commands",
    "url": "docs/cli.html#running-commands",
    "text": "The CLI bootstraps .env , config and the log driver before running a command, so env() , config() and Log::* are all available inside your commands. Routes are not loaded — the console stops right bef"
  },
  {
    "crumb": "Console (CLI)",
    "title": "Built-in commands",
    "url": "docs/cli.html#built-in-commands",
    "text": "Command Description key:generate Generates a new Defuse ASCII-safe APP_KEY and writes it to .env ."
  },
  {
    "crumb": "Console (CLI)",
    "title": "Adding a command",
    "url": "docs/cli.html#adding-a-command",
    "text": "Register command classes in routes/console.php , mapping name → class:"
  },
  {
    "crumb": "Console (CLI)",
    "title": "Command helpers",
    "url": "docs/cli.html#command-helpers",
    "text": "Method Description arg($key, $default) Value of a --key=value argument. has($key) Whether a key was passed. flag($key) True only if --key was passed as a bare flag. args() All parsed arguments. ask($q"
  },
  {
    "crumb": "Documentation",
    "title": "Support & Example",
    "url": "docs/support.html",
    "text": "A tour of the support utilities — Collection , Root and base_path() — followed by a complete end-to-end feature and the framework’s known quirks."
  },
  {
    "crumb": "Support & Example",
    "title": "Collection",
    "url": "docs/support.html#collection",
    "text": "A lightweight array bag with magic accessors:"
  },
  {
    "crumb": "Support & Example",
    "title": "Root & base_path()",
    "url": "docs/support.html#root-base_path",
    "text": "The project root path is registered at boot; use base_path() to build root-anchored paths:"
  },
  {
    "crumb": "Support & Example",
    "title": "End-to-end example",
    "url": "docs/support.html#end-to-end-example",
    "text": "A small “products” feature: list products (GET) and create one via a form (POST) with CSRF protection, validation, a flash message and logging."
  },
  {
    "crumb": "Support & Example",
    "title": "1. Routes — routes/web.php",
    "url": "docs/support.html#1-routes-routeswebphp",
    "text": "2. List action — app/Actions/ListProducts.php 3. Create action — app/Actions/CreateProduct.php 4. View — views/products/index.php That’s the whole request cycle: route → middleware ( CsrfMiddleware ) "
  },
  {
    "crumb": "Support & Example",
    "title": "2. List action — app/Actions/ListProducts.php",
    "url": "docs/support.html#2-list-action-appactionslistproductsphp",
    "text": "3. Create action — app/Actions/CreateProduct.php 4. View — views/products/index.php That’s the whole request cycle: route → middleware ( CsrfMiddleware ) → action → validation → flash → redirect → ren"
  },
  {
    "crumb": "Support & Example",
    "title": "3. Create action — app/Actions/CreateProduct.php",
    "url": "docs/support.html#3-create-action-appactionscreateproductphp",
    "text": "4. View — views/products/index.php That’s the whole request cycle: route → middleware ( CsrfMiddleware ) → action → validation → flash → redirect → rendered view."
  },
  {
    "crumb": "Support & Example",
    "title": "4. View — views/products/index.php",
    "url": "docs/support.html#4-view-viewsproductsindexphp",
    "text": "That’s the whole request cycle: route → middleware ( CsrfMiddleware ) → action → validation → flash → redirect → rendered view."
  },
  {
    "crumb": "Support & Example",
    "title": "Known quirks & limitations",
    "url": "docs/support.html#known-quirks-limitations",
    "text": "Intentional or current behaviours that differ from what you might expect from a mature framework — verified against the source:"
  },
  {
    "crumb": "Support & Example",
    "title": "Contributing",
    "url": "docs/support.html#contributing",
    "text": "Contributions are welcome — bug fixes, features and docs. The project uses a three-branch model: develop (active dev) → stage (pre-production) → main (production); topic branches ( feature/* , fix/* ,"
  },
  {
    "crumb": "Support & Example",
    "title": "License",
    "url": "docs/support.html#license",
    "text": "MIT — see composer.json ."
  },
  {
    "crumb": "Documentation",
    "title": "Storage",
    "url": "docs/storage.html",
    "text": "Lunaris ships a tiny filesystem abstraction: the Storage facade maps named disks to pluggable drivers, so reading, writing and serving files never touches a raw path."
  },
  {
    "crumb": "Storage",
    "title": "Disks",
    "url": "docs/storage.html#disks",
    "text": "Two local disks are registered at boot from config(\"storage.disks.*\") . Each disk has a driver and a root directory:"
  },
  {
    "crumb": "Storage",
    "title": "Getting a driver",
    "url": "docs/storage.html#getting-a-driver",
    "text": "Resolve a disk through the Storage facade — never by building a path yourself:"
  },
  {
    "crumb": "Storage",
    "title": "The StorageDriver contract",
    "url": "docs/storage.html#the-storagedriver-contract",
    "text": "Every driver implements System\\Support\\Storage\\StorageDriver :"
  },
  {
    "crumb": "Storage",
    "title": "Using the private disk",
    "url": "docs/storage.html#using-the-private-disk",
    "text": "Handling uploads putUploadedFile() stores an entry from $_FILES and returns the relative path you can persist (or false on any failure):"
  },
  {
    "crumb": "Storage",
    "title": "Handling uploads",
    "url": "docs/storage.html#handling-uploads",
    "text": "putUploadedFile() stores an entry from $_FILES and returns the relative path you can persist (or false on any failure):"
  },
  {
    "crumb": "Storage",
    "title": "LocalDriver guarantees",
    "url": "docs/storage.html#localdriver-guarantees",
    "text": "System\\Support\\Storage\\Drivers\\LocalDriver is the built-in driver, and it is defensive by design:"
  },
  {
    "crumb": "Storage",
    "title": "Path safety ( System\\Support\\Path )",
    "url": "docs/storage.html#path-safety-systemsupportpath-",
    "text": "Path is the guard used by LocalDriver . Given a root directory, it exposes:"
  },
  {
    "crumb": "Documentation",
    "title": "Runo — Overview & setup",
    "url": "docs/runo.html",
    "text": "Runo is the database engine for the Lunaris framework, but it works as a standalone library. It is intentionally not an ORM: a thin utility layer over PDO for executing plain SQL, binding values, hydrating rows into objects, casting, and managing transactions."
  },
  {
    "crumb": "Runo — Overview & setup",
    "title": "Philosophy",
    "url": "docs/runo.html#philosophy",
    "text": "Runo does not provide high-level abstractions like other ORMs. Instead, it encourages writing queries in plain SQL while providing bare-metal utilities such as a PDO wrapper. Raw SQL through DB::prepa"
  },
  {
    "crumb": "Runo — Overview & setup",
    "title": "Features",
    "url": "docs/runo.html#features",
    "text": "Static connection facade backed by one PDO instance"
  },
  {
    "crumb": "Runo — Overview & setup",
    "title": "Requirements",
    "url": "docs/runo.html#requirements",
    "text": "PHP 8.0 or newer (Docker image uses PHP 8.3)"
  },
  {
    "crumb": "Runo — Overview & setup",
    "title": "Installation",
    "url": "docs/runo.html#installation",
    "text": "Install with Composer:"
  },
  {
    "crumb": "Runo — Overview & setup",
    "title": "Quick start",
    "url": "docs/runo.html#quick-start",
    "text": "Configuration Key Required Example Description driver Yes mysql PDO driver used as the DSN prefix. host Yes 127.0.0.1 Database server hostname or IP address. port Yes 3306 Database server port. databa"
  },
  {
    "crumb": "Runo — Overview & setup",
    "title": "Configuration",
    "url": "docs/runo.html#configuration",
    "text": "Key Required Example Description driver Yes mysql PDO driver used as the DSN prefix. host Yes 127.0.0.1 Database server hostname or IP address. port Yes 3306 Database server port. database Yes app Dat"
  },
  {
    "crumb": "Runo — Overview & setup",
    "title": "Connection lifecycle",
    "url": "docs/runo.html#connection-lifecycle",
    "text": "The connection is stored in a static property and shared by every DB call."
  },
  {
    "crumb": "Runo — Overview & setup",
    "title": "Architecture",
    "url": "docs/runo.html#architecture",
    "text": "Project structure Local development with Docker From the project root: docker compose -f docker/docker-compose.yml up --build . Services include PHP 8.3 + Apache on :8080 and MariaDB 10.11 on :3306 ."
  },
  {
    "crumb": "Runo — Overview & setup",
    "title": "Project structure",
    "url": "docs/runo.html#project-structure",
    "text": "Local development with Docker From the project root: docker compose -f docker/docker-compose.yml up --build . Services include PHP 8.3 + Apache on :8080 and MariaDB 10.11 on :3306 ."
  },
  {
    "crumb": "Runo — Overview & setup",
    "title": "Local development with Docker",
    "url": "docs/runo.html#local-development-with-docker",
    "text": "From the project root: docker compose -f docker/docker-compose.yml up --build . Services include PHP 8.3 + Apache on :8080 and MariaDB 10.11 on :3306 ."
  },
  {
    "crumb": "Runo — Overview & setup",
    "title": "Known limitations",
    "url": "docs/runo.html#known-limitations",
    "text": "Only MySQL/MariaDB is targeted by the built-in DSN; one connection only."
  },
  {
    "crumb": "Documentation",
    "title": "Runo — Raw SQL & results",
    "url": "docs/runo-queries.html",
    "text": "Use DB::prepare() to create a Statement , bind values with args() , optionally cast/hydrate, then call execute() to get a Result ."
  },
  {
    "crumb": "Runo — Raw SQL & results",
    "title": "Raw queries",
    "url": "docs/runo-queries.html#raw-queries",
    "text": "Binding values Use named placeholders with leading colons. PDO types are inferred from PHP values:"
  },
  {
    "crumb": "Runo — Raw SQL & results",
    "title": "Binding values",
    "url": "docs/runo-queries.html#binding-values",
    "text": "Use named placeholders with leading colons. PDO types are inferred from PHP values:"
  },
  {
    "crumb": "Runo — Raw SQL & results",
    "title": "Inserting rows",
    "url": "docs/runo-queries.html#inserting-rows",
    "text": "meta()->id is populated only for statements starting with INSERT (from PDO::lastInsertId() , cast to int). The statement also exposes $statement->id ."
  },
  {
    "crumb": "Runo — Raw SQL & results",
    "title": "Updating rows",
    "url": "docs/runo-queries.html#updating-rows",
    "text": "Deleting rows Fetch behavior Statement::execute() fetches all rows when the statement reports at least one column ( columnCount() > 0 ) via fetchAll(PDO::FETCH_ASSOC) . This covers SELECT , SHOW , DES"
  },
  {
    "crumb": "Runo — Raw SQL & results",
    "title": "Deleting rows",
    "url": "docs/runo-queries.html#deleting-rows",
    "text": "Fetch behavior Statement::execute() fetches all rows when the statement reports at least one column ( columnCount() > 0 ) via fetchAll(PDO::FETCH_ASSOC) . This covers SELECT , SHOW , DESCRIBE , EXPLAI"
  },
  {
    "crumb": "Runo — Raw SQL & results",
    "title": "Fetch behavior",
    "url": "docs/runo-queries.html#fetch-behavior",
    "text": "Statement::execute() fetches all rows when the statement reports at least one column ( columnCount() > 0 ) via fetchAll(PDO::FETCH_ASSOC) . This covers SELECT , SHOW , DESCRIBE , EXPLAIN , etc. Result"
  },
  {
    "crumb": "Runo — Raw SQL & results",
    "title": "Working with results",
    "url": "docs/runo-queries.html#working-with-results",
    "text": "Result implements IteratorAggregate and Countable ."
  },
  {
    "crumb": "Runo — Raw SQL & results",
    "title": "Query metadata",
    "url": "docs/runo-queries.html#query-metadata",
    "text": "Part of the Lunaris documentation · Source on Codeberg · MIT License"
  },
  {
    "crumb": "Documentation",
    "title": "Runo — Records & query classes",
    "url": "docs/runo-records.html",
    "text": "Every row is hydrated into RunoSupportRecord unless another class is specified. Use cast() on a statement or $casts on a query class to convert values."
  },
  {
    "crumb": "Runo — Records & query classes",
    "title": "Records",
    "url": "docs/runo-records.html#records",
    "text": "Record supports magic access ( __get / __set / __isset ). Assigning properties only changes the in-memory object (no save() / update() / delete() )."
  },
  {
    "crumb": "Runo — Records & query classes",
    "title": "Casting values",
    "url": "docs/runo-records.html#casting-values",
    "text": "Cast Behavior 'int' Casts with (int) 'float' Casts with (float) 'bool' Casts with (bool) (note: string \"false\" becomes true ) 'json' If string, json_decode($value, true) ; invalid JSON becomes null Da"
  },
  {
    "crumb": "Runo — Records & query classes",
    "title": "Custom record classes",
    "url": "docs/runo-records.html#custom-record-classes",
    "text": "The class must extend Runo\\Support\\Record , otherwise Hydrator throws Exception(\"Invalid record class.\") ."
  },
  {
    "crumb": "Runo — Records & query classes",
    "title": "Class-level casts",
    "url": "docs/runo-records.html#class-level-casts",
    "text": "A record class's $casts is overwritten by the query's cast array by default; merge them in the constructor if you want defaults that can be overridden:"
  },
  {
    "crumb": "Runo — Records & query classes",
    "title": "Reusable query classes",
    "url": "docs/runo-records.html#reusable-query-classes",
    "text": "Query::run() passes SQL, args, casts, and record class to DB::prepare() . If your subclass overrides the constructor it must accept array $args = [] for Query::execute() ."
  },
  {
    "crumb": "Runo — Records & query classes",
    "title": "Combining Query with Sql",
    "url": "docs/runo-records.html#combining-query-with-sql",
    "text": "Sql bindings are not propagated automatically—assign $this->args = $query->args() inside sql() :"
  },
  {
    "crumb": "Documentation",
    "title": "Runo — Builder & transactions",
    "url": "docs/runo-builder.html",
    "text": "The Sql builder produces SQL strings and bindings but does not execute queries. Bindings use generated names like :p0 , :p1 ..."
  },
  {
    "crumb": "Runo — Builder & transactions",
    "title": "Using Sql",
    "url": "docs/runo-builder.html#using-sql",
    "text": "SELECT select() accepts column expressions; default is ['*'] ."
  },
  {
    "crumb": "Runo — Builder & transactions",
    "title": "SELECT",
    "url": "docs/runo-builder.html#select",
    "text": "select() accepts column expressions; default is ['*'] ."
  },
  {
    "crumb": "Runo — Builder & transactions",
    "title": "INSERT",
    "url": "docs/runo-builder.html#insert",
    "text": "Sql::raw() inserts the value verbatim (never pass untrusted input). Multiple insert() calls merge columns; the builder inserts one row per statement."
  },
  {
    "crumb": "Runo — Builder & transactions",
    "title": "UPDATE",
    "url": "docs/runo-builder.html#update",
    "text": "DELETE Safety update() and delete() have no built-in safety guard. Calling them without where() affects every row in the table."
  },
  {
    "crumb": "Runo — Builder & transactions",
    "title": "DELETE",
    "url": "docs/runo-builder.html#delete",
    "text": "Safety update() and delete() have no built-in safety guard. Calling them without where() affects every row in the table."
  },
  {
    "crumb": "Runo — Builder & transactions",
    "title": "WHERE conditions",
    "url": "docs/runo-builder.html#where-conditions",
    "text": "where(string|callable $column, ?string $operator = null, mixed $value = null) , orWhere() require an explicit operator:"
  },
  {
    "crumb": "Runo — Builder & transactions",
    "title": "WHERE IN",
    "url": "docs/runo-builder.html#where-in",
    "text": "whereIn() always joins with AND . An empty array produces IN () (invalid SQL) — guard against it."
  },
  {
    "crumb": "Runo — Builder & transactions",
    "title": "Nested WHERE groups",
    "url": "docs/runo-builder.html#nested-where-groups",
    "text": "Nested groups are syntactically supported but placeholder numbering can collide when combined with outer bindings (each Sql starts at :p0 ). Prefer flat conditions or raw SQL until this is addressed."
  },
  {
    "crumb": "Runo — Builder & transactions",
    "title": "JOIN",
    "url": "docs/runo-builder.html#join",
    "text": "Only inner JOIN is supported."
  },
  {
    "crumb": "Runo — Builder & transactions",
    "title": "ORDER BY, LIMIT, OFFSET",
    "url": "docs/runo-builder.html#order-by-limit-offset",
    "text": "orderBy() can be called multiple times; limit() / offset() accept integers. Using offset() without limit() may fail on MySQL."
  },
  {
    "crumb": "Runo — Builder & transactions",
    "title": "Builder method summary",
    "url": "docs/runo-builder.html#builder-method-summary",
    "text": "Method Description Returns Sql::table(string $table) Start a query Sql Sql::raw(string $value) Create a raw SQL fragment Raw select(array $columns) Set select columns (default ['*'] ) Sql insert(array"
  },
  {
    "crumb": "Runo — Builder & transactions",
    "title": "Transactions",
    "url": "docs/runo-builder.html#transactions",
    "text": "Commits on success, rolls back on any Throwable and rethrows it."
  },
  {
    "crumb": "Runo — Builder & transactions",
    "title": "Closure-based",
    "url": "docs/runo-builder.html#closure-based",
    "text": "Commits on success, rolls back on any Throwable and rethrows it."
  },
  {
    "crumb": "Runo — Builder & transactions",
    "title": "Manual",
    "url": "docs/runo-builder.html#manual",
    "text": "beginTransaction() does nothing if already active; commit() / rollback() check inTransaction() . No nested transactions/savepoints."
  },
  {
    "crumb": "Runo — Builder & transactions",
    "title": "Error handling and security",
    "url": "docs/runo-builder.html#error-handling-and-security",
    "text": "DB::prepare() before DB::init() throws Exception(\"Database not initialized.\") ."
  },
  {
    "crumb": "Runo — Builder & transactions",
    "title": "API reference",
    "url": "docs/runo-builder.html#api-reference",
    "text": "Class Notes Runo\\DB init() , prepare() , transaction() , beginTransaction() , commit() , rollback() Runo\\Database\\Statement args() , cast() , as() , execute() , $id Runo\\Database\\Query abstract sql() "
  },
  {
    "crumb": "Ecosystem",
    "title": "Runo — Database engine for Lunaris",
    "url": "runo.html",
    "text": "Runo is a minimal PDO database client and query builder for PHP. Raw SQL first, optional SQL builder, records and casts, query classes, and transactions."
  }
];
