# dc-extension-multi-schema

> Multi-schema component for use in [Amplience Dynamic Content](https://amplience.com/dynamic-content)

![Amplience Dynamic Content Multi Schema Extension](media/screenshot.gif)

## Usage

This extension can be used to edit a field that has multiple options. When a user selects an option, the fields associated with that option are displayed while the other fields are not.

### Example Schema

```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "...",

    "title": "Page",
    "description": "",

    "allOf": [{
        "$ref": "http://bigcontent.io/cms/schema/v1/core#/definitions/content"
    }],

    "type": "object",
    "properties": {
        "layout": {
			"ui:extension": {
				"url": "https://techiedarren.github.io/dc-extension-multi-schema/"
			},
			"oneOf": [
				{
					"type": "object",
					"title": "One Column",
					"properties": {
						"type": {
							"const": "one_column"
						},
						"column1": {
							"title": "Column 1 Content",
							"allOf": [
								{ "$ref": "http://bigcontent.io/cms/schema/v1/core#/definitions/content-link" },
								{
									"properties": {
										"contentType": {
											"enum": [
												"http://permitted-content-type-id"
											]
										}
									}
								}
							]
						}

					}
				},
				{
					"type": "object",
					"title": "Two Column",
					"properties": {
						"type": {
							"const": "two_column"
						},
						"column1": {
							"title": "Column 1 Content",
							"allOf": [
								{ "$ref": "http://bigcontent.io/cms/schema/v1/core#/definitions/content-link" },
								{
									"properties": {
										"contentType": {
											"enum": [
												"http://permitted-content-type-id"
											]
										}
									}
								}
							]
						},
						"column2": {
							"title": "Column 2 Content",
							"allOf": [
								{ "$ref": "http://bigcontent.io/cms/schema/v1/core#/definitions/content-link" },
								{
									"properties": {
										"contentType": {
											"enum": [
												"http://permitted-content-type-id"
											]
										}
									}
								}
							]
						}
					}
				}
			]
		}
    },
    "propertyOrder": []
}
```

## Advanced

### Validation

To enable validation, pass in an additional parameter “pointer” inside the “ui:extension” params. The pointer should indicate where in the schema the tree field is located, relative to the root of the schema, using a slash separated path.

Example:

```json
{
    "ui:extension": {
        "url": "...",
        "params": {
            "pointer": "/layout"
        }
    }
}
```

### Content Link Cards & Icons

If your schema includes content link fields, the extension will show a default icon when the value is populated. You can override this with either a card or custom icon by providing the following settings:

```json
{
    "ui:extension": {
        "url": "...",
        "params": {
            "contentTypes": {
                "cards": {
                    "<content-type-id>": "https://myapp.com/preview/card?vse={{vse.domain}}&content={{content.sys.id}}"
                },
                "icons": {
                    "<content-type-id>": "https://myapp.com/icons/icon-banner.png"
                }
            }
        }
    }
}
```

You can also use a wildcard “*” to use the same card or icon for every content type:

```json
{
    "ui:extension": {
        "url": "...",
        "params": {
            "contentTypes": {
                "cards": {
                    "*": "https://myapp.com/preview/card?vse={{vse.domain}}&content={{content.sys.id}}"
                },
                "icons": {
                    "*": "https://myapp.com/icons/icon-banner.png"
                }
            }
        }
    }
}
```

## License

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
