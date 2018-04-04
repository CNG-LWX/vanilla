/*
 * @author Adam (charrondev) Charron <adam.c@vanillaforums.com>
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license https://opensource.org/licenses/GPL-2.0 GPL-2.0
 */

import { onReady } from "@core/application";
import { mountEditor } from "./editor";

onReady(() => {
    setupEditor();
    setupCommentEditForm();
});

/**
 * Set up the new discussion form if it exists.
 */
function setupEditor() {
    const discussionFormContainer = document.querySelectorAll(".js-richText");

    discussionFormContainer.forEach(mountEditor);
}

/**
 * Set up the editor if the someone clicks edit on a form.
 */
function setupCommentEditForm() {
    $(document).on("EditCommentFormLoaded", (event, container) => {
        const $commentFormContainer = $(container).find(".js-richText");
        if ($commentFormContainer) {
            mountEditor($commentFormContainer[0]);
        }
    });
}