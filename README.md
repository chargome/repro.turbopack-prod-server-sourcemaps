# Reproduction steps

1. Build the application using `npm run build`.
2. Start the application using `npm run start`.
3. Visit the endpoint `/route-handler`.
4. Observe minified function name in console.
5. Click on the generated minified file name and the according source map file: it does not contain any entries in the `names` field.

## Examples

Function names are not minified in a dev build which is why the function name will be correct. Bundle + sourcemap examples:

- [dev](/source-map-dev)
- [prod](source-map-prod)

### Function name not minified in [dev](/source-map-dev):

![DEV](dev.png)

---

### Function name minified + missing `name` field in source map [prod](source-map-prod):

![PROD](prod.png)
