# Gulp Setup
### Files Structure
```
┌── modules                              ┌───┬───────┬───────┬───────────┬─────────┬───────────┬─────┬─────────┬───┐
├── public                               ├─┐ └─┐ ╷ ╶─┘ ╶─┐ ╷ ╵ ┌───╴ ┌───┘ ╷ ┌───┐ ├─╴ ┌─────┬─┘ ╷ ╷ └───┬─╴ ┌─┘ ╷ │
│    ├── index.html                      │ └─╴ │ ├─┬─────┘ │ ┌─┴─┐ ┌─┘ ┌───┘ │ ╷ ╵ │ ╶─┘ ┌─┐ ╵ ╶─┤ └───┐ ╵ ┌─┘ ┌─┤ │
│    ├── fonts                           │ ╶─┬─┘ ╵ │ ┌───┬─┴─┘ ╷ └─┘ ╶─┤ ┌───┤ └─┬─┤ ╶───┘ └───┬─┴───┐ └───┘ ┌─┘ │ │
│    │    ├── font.ttf                   ├─┐ └───┐ │ ╵ ╷ │ ┌───┼───────┘ │ ┌─┴─╴ │ └─╴ ┌───┐ ┌─┘ ┌─╴ │ ╶─────┘ ╷ │ │
│    │    ├── font.woff                  │ ├───┐ └─┴───┤ ╵ ╵ ┌─┘ ┌───┬───┤ ╵ ╶───┤ ┌───┘ ╷ └─┘ ┌─┤ ╶─┼───┬─────┘ │ │
│    │    ├── font.woff2                 │ ╵ ╷ └───┬─┐ └─────┤ ╷ │ ╷ ╵ ╷ └─────┐ └─┘ ┌─┬─┴─────┤ └─┐ │ ┌─┘ ┌─────┤ │
│    │    ├── font.eot                   │ ╶─┼─┐ ╷ ╵ └───┬─╴ │ ├─┘ ├───┤ ╶───┐ └─┬───┘ ╵ ╷ ╶─┐ └─╴ │ │ ╵ ╶─┴───╴ │ │
│    │    └── font.svg                   ├─┐ ╵ │ │ ┌───┐ │ ╶─┤ ╵ ╶─┤ ╷ ├───┐ ├─┐ └───────┴─┐ │ ┌───┤ │ ╶─┬───┬─╴ │ │
│    └── css                             │ ├─╴ │ └─┘ ╷ └─┴─┐ └─────┘ │ └─┐ ╵ ╵ └───────┬─╴ │ └─┘ ╷ ╵ │ ┌─┘ ╷ │ ╶─┤ │
│         └── app.css                    │ │ ┌─┴─────┴─┬─┐ └─┬───────┼─╴ ├───────┬───┬─┘ ┌─┘ ┌───┴───┴─┘ ┌─┘ ├─╴ │ │
├── res                                  │ ╵ │ ╶─────┐ ╵ │ ╶─┘ ┌───┐ │ ╶─┘ ┌───┐ ╵ ╷ ╵ ┌─┤ ┌─┴─╴ ┌─────┬─┤ ╶─┴───┘ │
│    ├── views                           │ ┌─┴─────┐ ├───┴───┬─┘ ╷ │ ├─────┴─╴ └─┬─┴───┘ │ ╵ ┌───┤ ╶─┐ ╵ ├───────┐ │
│    │    └── index.html                 │ │ ╷ ┌─╴ ╵ │ ┌─╴ ┌─┘ ┌─┘ ╵ │ ╶─┬─┐ ┌───┘ ┌───┐ └───┴─╴ │ ╷ └─┐ │ ╶─┬─┐ │ │
│    ├── layouts                         │ │ │ └───┬─┘ │ ╷ │ ╷ ├───┐ ├─┐ │ │ │ ┌───┴─┐ └─┐ ╶─┐ ┌─┘ ├─┐ │ ├─┐ │ │ │ │
│    │    └── layout.html                │ │ ├─────┼───┤ └─┘ ├  ┌──┘ │ │ ╵ └─┘ ├─┐ ┌─┴┐  │   │ │   │ │ │ │ │ │ │ └─┤
│    ├── components                      │ │ │ ────┤   └─┐   │  └  │ │ └───┐   │ │ └──┘  │   │ │   │ │ │ │ ├─┼─┐ │ │
│    │    └── component                  │ └─┼───┐ ╵ ╶─┐ └─┤ ├─  ╷ └─┘ ┌───┘ │ └─┐ ╶─────┴─┐ └─┘ ┌─┘ │ │ ├─┘ │ ├─┘ │
│    │          ├── component.html       ├─┐ ╵ ╷ └─────┼─╴ │ ╵ ┌─┴───┬─┤ ╶───┴─┐ └─────┐ ╷ ├─────┴─╴ │ │ │ ╶─┤ ╵ ┌─┤
│    │          ├── component.scss       │ └─┬─┴─────╴ │ ╶─┴─┬─┴─╴ ╷ │ └───┐ ╶─┼─────┐ └─┤ ╵ ╷ ╶─────┤ └─┴─┐ └─┬─┘ │
│    │          └── component.js         ├─╴ │ ╶─┬─────┴─╴ ╷ ╵ ┌───┤ └─╴ ╷ └─┐ │ ╷ ╶─┴─┐ ├───┴───┐ ╷ └─┐ ╶─┴─┐ └─┐ │
│    ├── fonts                           │ ╶─┴─┐ ├───╴ ┌───┼───┘ ╷ └─┬─╴ ├───┘ │ └─┐ ╶─┘ │ ┌───┐ └─┼─╴ ├─┐ ╶─┴─┐ ╵ │
│    │    └── font.ttf                   │ ╷ ╷ │ ╵ ┌───┤ ╷ ╵ ┌───┤ ╶─┤ ╶─┤ ╶─┬─┴─┐ ├─────┤ └─┐ └─╴ │ ╷ │ └───┐ ├─╴ │
│    └── styles                          │ │ └─┴───┘ ╶─┘ └───┴─╴ └─┐ └─╴ └─┐ ╵ ╷ ╵ └─╴ ╷ └─╴ │ ╶───┘ │ ╵ ┌─╴ │ ╵ ╶─┤
└──        └── bootstrap                 └─┴───────────────────────┴───────┴───┴───────┴─────┴───────┴───┴───┴─────┘
```