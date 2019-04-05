// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { Server } from 'http';
import {
  commands,
  ExtensionContext,
  TreeView,
  ViewColumn,
  window,
  workspace
} from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
		console.log('Congratulations, your extension "scaffolding-screen" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = commands.registerCommand('extension.scaffoldscreen', () => {
		// The code you place here will be executed every time your command is executed
		const panel = window.createWebviewPanel("scaffoldScreen", "Scaffold Screen", ViewColumn.One, {});

		// And set its HTML content
		panel.webview.html = getWebviewContent();
		// Display a message box to the user
		// window.showInformationMessage('Scaffold Screen');

		// After 5sec, pragmatically close the webview panel
		const timeout = setTimeout(() => panel.dispose(), 5000);

		panel.onDidDispose(
			() => {
				// Handle user closing panel before the 5sec have passed
				clearTimeout(timeout);
			},
			null,
			context.subscriptions
		);

	});

	context.subscriptions.push(disposable);
}

function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
    <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
</body>
</html>`;
}

// this method is called when your extension is deactivated
export function deactivate() {}
