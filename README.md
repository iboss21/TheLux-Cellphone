# TheLux-Cellphone

Welcome to **TheLux-Cellphone**, an open-source initiative designed to enhance the in-game mobile experience in FiveM. Drawing inspiration from an iPhone-style aesthetic, TheLux-Cellphone offers a sleek, elegant, and straightforward interface.

## Objective

Our primary goal is to deliver a visually appealing and user-friendly phone interface that enriches the gameplay experience without overwhelming players. By focusing on essential features and intuitive navigation, we aim to make in-game communication more enjoyable, immersive, and easy to use.

## Inspiration

This project takes cues from **QBPhone** (part of the **QBCore** framework), merging its foundational functionalities with a fresh, modern look. We strive to improve the user experience while retaining the familiar features that players know and love.

## Dependencies

### For QB:
- **[QB Core](https://github.com/qbcore-framework/qb-core "QB Core")**: Core framework functionalities.
- **[QB Banking](https://github.com/qbcore-framework/qb-banking "QB Banking")**: Required for the digital banking and invoicing app.

### For ESX:
- **[ESX Core](https://github.com/esx-framework/esx_core "ESX Core")**: Core framework functionalities.
- **[ESX Banking](https://github.com/esx-framework/esx_banking "ESX Banking")**: Required for digital banking features.
- **[ESX Billing](https://github.com/esx-framework/esx_billing "ESX Billing")**: Required for billing functionality within the banking app.

### For QBX:
- *Documentation updates forthcoming.*

### For OX (in progress):
- *Integration work in progress.*

**Important**: If you use alternative garage, housing, banking, or invoicing resources, you can still utilize TheLux-Cellphone with some adjustments. Update the queries in **server/core/[your fw].lua** to match the required data structure. Please refrain from altering the established structure unless you plan to modify the associated .jsx code.

**Always Required**:  
- **[OX Lib](https://github.com/overextended/ox_lib "OX Lib")**: Ensures seamless integration and compatibility with existing systems.

## Tech Stack

- **React.js**: Powers the dynamic, responsive user interface.
- **Tailwind CSS**: Provides a utility-first approach for crafting a clean, modern design.

## Contributing

We welcome community involvement! Whether you have issues to report, pull requests to submit, or feature suggestions to share, your contributions are highly encouraged. Let’s work together to continually improve the TheLux-Cellphone experience.

## License

This project is licensed under the DWYWDBM License. For full details, see the [LICENSE](https://github.com/alfaben12/z-phone/blob/main/LICENSE) file. *(Replace URL with TheLux-Cellphone’s repository if necessary.)*

---

## Ready to Use???

### (Optional for QB) Bank Transactions

To record all bank transactions, edit **qb-core/server/player.lua**:

**In `self.Functions.AddMoney`**:

```lua
-- OTHER CODE
if not self.Offline then
    -- OTHER CODE
    if moneytype == 'bank' then
        MySQL.Async.insert('INSERT INTO bank_statements (citizenid, account_name, amount, reason, statement_type) VALUES (?, ?, ?, ?, ?)', {
            self.PlayerData.citizenid,
            'checking',
            amount,
            reason,
            'deposit'
        })
    end
    -- OTHER CODE
end
```

**In `self.Functions.RemoveMoney`**:

```lua
-- OTHER CODE
if not self.Offline then
    -- OTHER CODE
    if moneytype == 'bank' then
        MySQL.Async.insert('INSERT INTO bank_statements (citizenid, account_name, amount, reason, statement_type) VALUES (?, ?, ?, ?, ?)', {
            self.PlayerData.citizenid,
            'checking',
            amount,
            reason,
            'withdraw'
        })
        TriggerClientEvent('qb-phone:client:RemoveBankMoney', self.PlayerData.source, amount)
    end
    -- OTHER CODE
end
```

### (Required) Import Sounds

Visit the corresponding repository (previously [this link](https://github.com/alfaben12/z-phone/tree/main/html/sounds)) and copy all sound files. Paste them into `resources/[standalone]/interact-sound/client/html/sounds`.

### (Required) Import Database

Import the SQL file from the repository (previously [z-phone.sql](https://github.com/alfaben12/z-phone/blob/main/z-phone.sql)) into your database. This adds all necessary tables to support TheLux-Cellphone.

## Important Notes

The default phone number system in QBCore may not be compatible with TheLux-Cellphone. Using `QBCore.Functions.GetPlayerByPhone(number)` with a TheLux-Cellphone number may yield incorrect results. To prevent this, ensure TheLux-Cellphone numbers are synchronized with QBCore character data (in the `charinfo` column of the `players` table, under `phone`).

## Additional Information

The original iPhone object used as a reference was sourced from forum.cfx.re, though the exact author is currently unknown. If you recognize it, please let us know!

TheLux-Cellphone v2.x.x has not yet been optimized. If you’re interested in optimizing it, feel free to do so and submit a pull request.

## Discussion

Join the conversation on [Discord](https://discord.com/channels/1012753553418354748/1289265300457525269/1289265300457525269).

## Showcase

Check out our [YouTube demo](https://www.youtube.com/watch?v=sE6SahWlA3U).

## Support

Your support is appreciated! Consider contributing via [Ko-fi](https://ko-fi.com/alfaben).

## Acknowledgments

**Thanks to all our contributors:**

<table>
   <tbody>
      <tr>
         <td align="center" valign="top">
            <a href="https://github.com/alfaben12"
               style="text-decoration: none;">
               <img
                  src="https://avatars.githubusercontent.com/u/20008086?v=4"
                  width="50px"
                  alt="Thariq Alfa"
               /><br />
               <sub><b>alfaben12</b></sub></a>
         </td>
      </tr>
   </tbody>
</table>

---

Thank you for checking out TheLux-Cellphone! We hope you enjoy the enhanced in-game mobile experience as much as we enjoyed creating it.Below is the rewritten version with the project name changed to **TheLux-Cellphone**:

---

# TheLux-Cellphone

Welcome to **TheLux-Cellphone**, an open-source initiative designed to enhance the in-game mobile experience in FiveM. Drawing inspiration from an iPhone-style aesthetic, TheLux-Cellphone offers a sleek, elegant, and straightforward interface.

## Objective

Our primary goal is to deliver a visually appealing and user-friendly phone interface that enriches the gameplay experience without overwhelming players. By focusing on essential features and intuitive navigation, we aim to make in-game communication more enjoyable, immersive, and easy to use.

## Inspiration

This project takes cues from **QBPhone** (part of the **QBCore** framework), merging its foundational functionalities with a fresh, modern look. We strive to improve the user experience while retaining the familiar features that players know and love.

## Dependencies

### For QB:
- **[QB Core](https://github.com/qbcore-framework/qb-core "QB Core")**: Core framework functionalities.
- **[QB Banking](https://github.com/qbcore-framework/qb-banking "QB Banking")**: Required for the digital banking and invoicing app.

### For ESX:
- **[ESX Core](https://github.com/esx-framework/esx_core "ESX Core")**: Core framework functionalities.
- **[ESX Banking](https://github.com/esx-framework/esx_banking "ESX Banking")**: Required for digital banking features.
- **[ESX Billing](https://github.com/esx-framework/esx_billing "ESX Billing")**: Required for billing functionality within the banking app.

### For QBX:
- *Documentation updates forthcoming.*

### For OX (in progress):
- *Integration work in progress.*

**Important**: If you use alternative garage, housing, banking, or invoicing resources, you can still utilize TheLux-Cellphone with some adjustments. Update the queries in **server/core/[your fw].lua** to match the required data structure. Please refrain from altering the established structure unless you plan to modify the associated .jsx code.

**Always Required**:  
- **[OX Lib](https://github.com/overextended/ox_lib "OX Lib")**: Ensures seamless integration and compatibility with existing systems.

## Tech Stack

- **React.js**: Powers the dynamic, responsive user interface.
- **Tailwind CSS**: Provides a utility-first approach for crafting a clean, modern design.

## Contributing

We welcome community involvement! Whether you have issues to report, pull requests to submit, or feature suggestions to share, your contributions are highly encouraged. Let’s work together to continually improve the TheLux-Cellphone experience.

## License

This project is licensed under the DWYWDBM License. For full details, see the [LICENSE](https://github.com/alfaben12/z-phone/blob/main/LICENSE) file. *(Replace URL with TheLux-Cellphone’s repository if necessary.)*

---

## Ready to Use???

### (Optional for QB) Bank Transactions

To record all bank transactions, edit **qb-core/server/player.lua**:

**In `self.Functions.AddMoney`**:

```lua
-- OTHER CODE
if not self.Offline then
    -- OTHER CODE
    if moneytype == 'bank' then
        MySQL.Async.insert('INSERT INTO bank_statements (citizenid, account_name, amount, reason, statement_type) VALUES (?, ?, ?, ?, ?)', {
            self.PlayerData.citizenid,
            'checking',
            amount,
            reason,
            'deposit'
        })
    end
    -- OTHER CODE
end
```

**In `self.Functions.RemoveMoney`**:

```lua
-- OTHER CODE
if not self.Offline then
    -- OTHER CODE
    if moneytype == 'bank' then
        MySQL.Async.insert('INSERT INTO bank_statements (citizenid, account_name, amount, reason, statement_type) VALUES (?, ?, ?, ?, ?)', {
            self.PlayerData.citizenid,
            'checking',
            amount,
            reason,
            'withdraw'
        })
        TriggerClientEvent('qb-phone:client:RemoveBankMoney', self.PlayerData.source, amount)
    end
    -- OTHER CODE
end
```

### (Required) Import Sounds

Visit the corresponding repository (previously [this link](https://github.com/alfaben12/z-phone/tree/main/html/sounds)) and copy all sound files. Paste them into `resources/[standalone]/interact-sound/client/html/sounds`.

### (Required) Import Database

Import the SQL file from the repository (previously [z-phone.sql](https://github.com/alfaben12/z-phone/blob/main/z-phone.sql)) into your database. This adds all necessary tables to support TheLux-Cellphone.

## Important Notes

The default phone number system in QBCore may not be compatible with TheLux-Cellphone. Using `QBCore.Functions.GetPlayerByPhone(number)` with a TheLux-Cellphone number may yield incorrect results. To prevent this, ensure TheLux-Cellphone numbers are synchronized with QBCore character data (in the `charinfo` column of the `players` table, under `phone`).

## Additional Information

The original iPhone object used as a reference was sourced from forum.cfx.re, though the exact author is currently unknown. If you recognize it, please let us know!

TheLux-Cellphone v2.x.x has not yet been optimized. If you’re interested in optimizing it, feel free to do so and submit a pull request.

## Discussion

Join the conversation on [Discord](https://discord.com/channels/1012753553418354748/1289265300457525269/1289265300457525269).

## Showcase

Check out our [YouTube demo](https://www.youtube.com/watch?v=sE6SahWlA3U).

## Support

Your support is appreciated! Consider contributing via [Ko-fi](https://ko-fi.com/alfaben).

## Acknowledgments

**Thanks to all our contributors:**

<table>
   <tbody>
      <tr>
         <td align="center" valign="top">
            <a href="https://github.com/alfaben12"
               style="text-decoration: none;">
               <img
                  src="https://avatars.githubusercontent.com/u/20008086?v=4"
                  width="50px"
                  alt="Thariq Alfa"
               /><br />
               <sub><b>alfaben12</b></sub></a>
         </td>
      </tr>
   </tbody>
</table>

---

Thank you for checking out TheLux-Cellphone! We hope you enjoy the enhanced in-game mobile experience as much as we enjoyed creating it.
