// This file is part of Prusa-Connect-Local
// Copyright (C) 2018-2019 Prusa Research s.r.o. - www.prusa3d.com
// SPDX-License-Identifier: GPL-3.0-or-later

import "./style.scss";

class Toast {
  static notifications: Array<HTMLElement> = [];
  static container: HTMLElement = document.getElementById("prusa-toast");

  static info(title: string, message: string, type: string = "", autoClone=true): void {
    const notification = document.createElement("article");
    if (type) {
      notification.className = type;
    }

    const header = document.createElement("div");
    header.className = "toast-header";

    const header_title = document.createElement("p");
    header_title.className = "txt-size-2";
    header_title.appendChild(document.createTextNode(title));
    header.appendChild(header_title);

    const button = document.createElement("button");
    button.className = "delete delete-size";
    button.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();
      notification.style.display = "none";
    });
    header.appendChild(button);

    const body = document.createElement("div");
    body.className = "toast-body txt-size-2 prusa-break-word";
    body.appendChild(document.createTextNode(message));

    notification.appendChild(header);
    notification.appendChild(body);

    this.container.appendChild(notification);
    if(autoClone){
      setTimeout(() => {
        this.container.removeChild(notification);
      }, 10500);
    }
  }

  static warning(title: string, message: string): void {
    this.info(title, message, "warning", false);
  }

  static error(title: string, message: string): void {
    this.info(title, message, "error", false);
  }

  static success(title: string, message: string): void {
    this.info(title, message, "success");
  }
}

export default Toast;
