// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// #[tauri::command]
// fn greet(name: &str) -> String {
//     format!("Hello, {}! You've been greeted from Rust!", name)
// }

#[tauri::command]
fn open(P: &str){
    let file_path= P;
    if let Err(e) = open_file(file_path) {
        eprintln!("Error opening file: {}", e);
    }
}
use std::process::Command;
// fn open_file(file_path:&str)->Result<(),std::io::Error>{
//     let output=
//         Command::new("sdg-open")
//         .arg(file_path)
//         .output();
//     match output {
//         Ok(_)=>Ok(()),
//         Err(e)=>Err(e),
//     }
// }
fn open_file(file_path: &str) -> Result<(), std::io::Error> {
    let result = if cfg!(target_os = "windows") {
        Command::new("explorer")
            .arg(file_path)
            .spawn()
    } else if cfg!(target_os = "macos") {
        Command::new("open")
            .arg(file_path)
            .spawn()
    } else {
        Command::new("xdg-open")
            .arg(file_path)
            .spawn()
    };

    match result {
        Ok(_) => Ok(()),
        Err(e) => Err(e),
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![open])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
