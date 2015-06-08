# Environmentalist

Environmentalist is a CLI utility for viewing the required environmental variables of a given node project.

## Installation

```
npm install -g environmentalist
```

## JSON Format

The Environmentalist JSON format is very simple and is simply an array of objects, where each object is an environmentalist variable declaration.

Here is what an environmentalist variable looks like:
```javascript
{
	“name”: “PASSWORD_HASH_SECRET”,
	“description”: “Used to compute the password hash of users”,
	“default”: “ABCDEFGHIJKLMOP”,
	“required”: true
}
```

A full environmentalist.json file should look like this.
```javascript
[
	{
		“name”: “PASSWORD_HASH_SECRET”,
		“description”: “Used to compute the password hash of users”,
		“default”: “ABCDEFGHIJKLMOP”,
		“required”: true
	},
	{
		“name”: “LOG_LEVEL”,
		“description”: “Sets the level that will be logged by the system”,
		“default”: “info”,
		“required”: false
	},
	{
		“name”: “CRAZY_VARIABLE” 
	}
]
```

The fields meanings are as follows:

***NAME IS THE ONLY REQUIRED FIELD, EVERYTHING ELSE IS OPTIONAL***

*Name*: The Environmental variable name. This is what you would put after process.env if you were accessing it in the program. For example process.env.VARIABLE_NAME would have a name property of VARIABLE_NAME.

*Description*: A description of what the variable does in the application. This is just for ease of understanding and can be a string of any length but brevity is advised.

*Default*: A default value that can safely be used. If none is provided it will default to none. Do not include sensitive keys such as a SASS private key in the default, only use it to provide repository safe defaults to provide an easy way to setup environments. A good use case would be for a environmental variable that set the logging level, a bad use case would be a Amazon S3 private key.

*Required*: Required means that the application ***WILL NOT FUNCTION*** without the variable. This should only be used for environmental variables without which the system will error or otherwise cease to function correctly.

## CLI Usage

To run environmentalist simply run

```
environmentalist
```	

inside the root directory of your package.

Environmentalist will automatically analyse your package and all of its dependencies and return a table of all the environmental variables required and available from any environmentalist enabled package inside the directory chain.

## Issues and Pull Requests

GitHub Issues is our issue tracker should any bugs or feature requests arise. 

Pull Requests are also welcomed, but try to keep the code clean and well commented.

## License

MIT License, use it, love it, fork it, sell it for ingots, whatever floats your boat.

Just don’t be evil. Having said that, if you find a way to make environmental variables evil I am impressed. But still don’t do it.

## Versioning

We use Semantic Versioning. Yay for not breaking things!