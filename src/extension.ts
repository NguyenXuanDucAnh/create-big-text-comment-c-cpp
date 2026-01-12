// ============================================
// FILE: src/extension.ts
// ============================================

import * as vscode from 'vscode';
import { generateAsciiComment } from './ascii-letters';

export function activate(context: vscode.ExtensionContext) {
    console.log('ASCII Comment Extension is now active!');

    // Lắng nghe sự kiện thay đổi text document
    const disposableTextChange = vscode.workspace.onDidChangeTextDocument(async (event) => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        // Kiểm tra xem có phải file C/C++ không
        const languageId = editor.document.languageId;
        if (languageId !== 'c' && languageId !== 'cpp') {
            return;
        }

        // Lấy thay đổi cuối cùng
        const change = event.contentChanges[0];
        if (!change) {
            return;
        }

        // Kiểm tra xem có gõ "/**bt" + Enter không
        const text = change.text;
        if (text === '\n' || text === '\r\n') {
            const position = editor.selection.active;
            const line = editor.document.lineAt(position.line > 0 ? position.line - 1 : 0);
            const lineText = line.text.trim();

            if (lineText === '/**bt') {
                // Xóa dòng "/**bt"
                await editor.edit(editBuilder => {
                    editBuilder.delete(line.range);
                });

                // Hiển thị input box
                const userInput = await vscode.window.showInputBox({
                    prompt: 'Nhập text cho ASCII comment',
                    placeHolder: 'Ví dụ: HELLO WORLD',
                    validateInput: (value) => {
                        if (!value || value.trim() === '') {
                            return 'Vui lòng nhập text';
                        }
                        // Kiểm tra chỉ chứa chữ cái và khoảng trắng
                        if (!/^[a-zA-Z\s]+$/.test(value)) {
                            return 'Chỉ hỗ trợ chữ cái A-Z và khoảng trắng';
                        }
                        return null;
                    }
                });

                if (userInput) {
                    // Tạo comment với ASCII art
                    const comment = generateAsciiComment(userInput, 'block');
                    
                    // Insert vào vị trí hiện tại
                    const insertPosition = new vscode.Position(position.line - 1, 0);
                    await editor.edit(editBuilder => {
                        editBuilder.insert(insertPosition, comment + '\n');
                    });

                    // Di chuyển cursor xuống dưới comment
                    const newPosition = new vscode.Position(
                        insertPosition.line + comment.split('\n').length,
                        0
                    );
                    editor.selection = new vscode.Selection(newPosition, newPosition);
                }
            }
        }
    });

    // Đăng ký command để tạo comment thủ công
    const disposableCommand = vscode.commands.registerCommand(
        'ascii-comment.generate',
        async () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showErrorMessage('Không có editor nào đang mở');
                return;
            }

            const userInput = await vscode.window.showInputBox({
                prompt: 'Nhập text cho ASCII comment',
                placeHolder: 'Ví dụ: HELLO WORLD',
                validateInput: (value) => {
                    if (!value || value.trim() === '') {
                        return 'Vui lòng nhập text';
                    }
                    if (!/^[a-zA-Z\s]+$/.test(value)) {
                        return 'Chỉ hỗ trợ chữ cái A-Z và khoảng trắng';
                    }
                    return null;
                }
            });

            if (userInput) {
                // Hỏi kiểu comment
                const commentStyle = await vscode.window.showQuickPick(
                    [
                        { label: 'Block Comment (/* */)', value: 'block' },
                        { label: 'Line Comment (//)', value: 'line' }
                    ],
                    {
                        placeHolder: 'Chọn kiểu comment'
                    }
                );

                if (commentStyle) {
                    const comment = generateAsciiComment(
                        userInput,
                        commentStyle.value as 'block' | 'line'
                    );

                    const position = editor.selection.active;
                    await editor.edit(editBuilder => {
                        editBuilder.insert(position, comment + '\n');
                    });
                }
            }
        }
    );

    context.subscriptions.push(disposableTextChange, disposableCommand);
}

export function deactivate() {}
