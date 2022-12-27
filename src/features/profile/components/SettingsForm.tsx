import React from 'react';
import { FormGroup, TextAreaFormGroup } from 'components/FormGroup';
import { UserSettings } from 'types';

interface Props {
  formObj: UserSettings;
  onUpdateSettings: (ev: React.FormEvent) => void;
  onChangeForm: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => void;
}

export const SettingsForm = ({
  formObj,
  onUpdateSettings,
  onChangeForm,
}: Props) => {
  return (
    <form onSubmit={onUpdateSettings} className="w-2/3 mx-auto">
      <FormGroup
        type="text"
        key="username"
        placeholder="Username..."
        value={formObj.username!}
        lg={false}
        disabled={false}
        onChange={(event) => onChangeForm(event, 'username')}
      />
      <TextAreaFormGroup
        type="text"
        key="bio"
        placeholder="Short bio about you..."
        value={formObj.bio || ''}
        rows={3}
        disabled={false}
        onChange={(event) => onChangeForm(event, 'bio')}
      />
      <FormGroup
        type="text"
        key="email"
        placeholder="Email..."
        value={formObj.email!}
        lg={false}
        disabled={false}
        onChange={(event) => onChangeForm(event, 'email')}
      />
      <button className="bg-green text-white text-xl font-medium px-24 py-4 rounded-lg float-right">
        Update Settings
      </button>
    </form>
  );
};
