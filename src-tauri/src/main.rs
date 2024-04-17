// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    ideate_lib::run()
}
// use open;

// #[tauri::command]
// fn open_file(path: &str) {
//     let result = open::that(path);
//     if let Err(err) = result {
//         println!("Error opening file: {}", err);
//     }
// }

// fn main() {
//     tauri::Builder::default()
//         .invoke_handler(tauri::generate_handler![open_file])
//         .run(tauri::generate_context!())
//         .expect("error while running tauri application");
// }